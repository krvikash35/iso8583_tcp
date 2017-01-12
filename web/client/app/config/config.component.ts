import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ConfigService } from './config.service'
import { LogService } from '../data/log.service'
import { DomSanitizer} from '@angular/platform-browser';
import { Profile } from './config.spec'

@Component({
    moduleId: module.id,
    selector: 'config',
    // templateUrl: 'app/config/config.component.html',
    templateUrl: 'config.component.html',
    styleUrls: [],
    providers: [ConfigService]
})
export class ConfigComponent implements OnInit {
    prop: any;
    config: Profile;
    fdlist = [];
    showExportFileName: boolean;
    bindExportData: boolean;
    exportFileName = "7x_chalukya_setup.json"


    constructor(private configService: ConfigService, private logService: LogService, private router: Router, private sanitizer: DomSanitizer) { }


    ngOnInit(): void {
        this.logService.logEvent("ConfigComponent.ngOnInit...initializing, requesting configService to fetch data!")
        this.config = this.configService.getConfigObj();
        this.prop = this.configService.getPropTemplte();
        this.fdlist = this.configService.getFieldDefList();
    }



    update_config(sectionKey: any) {
        this.configService.setConfigObj(sectionKey, this.config)
    }

    getExportFileName() {
        if (!this.exportFileName) {
            return "7x_chalukya_setup.json"
        } else {
            let temp = this.exportFileName.split(".");
            if (temp) {
                return temp[0] + ".json"
            } else {
                return temp + ".json"
            }
        }
    }

    exportConfigData(): any {
        this.logService.logEvent("ConfigComponent.exportConfigData...export config data")
        let url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(this.config, null, 4));
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }

    importConfigData(event: any): any {
      this.logService.logEvent("ConfigComponent.importConfigData...import config data")
      let target = event.target || event.srcElement || event.currentTarget;
      let fileList = target.files;
      let file = fileList[0];
      var that = this;
      target.value = '';
      this.logService.logInfo("ConfigComponent:importConfigData:fileList ", fileList);
      let freader = new FileReader();
      freader.onload = function(event: any) {
          let fileContent = JSON.parse(event.target.result)
          that.config = fileContent;
          that.logService.logInfo("ConfigComponent:importConfigData:fileContent ", fileContent);
          that.configService.writeToLocalStorage("prop", that.config);
          that.logService.logEvent("ConfigComponent.importConfigData...updated cache!")
      }
      freader.readAsText(file);
    }

}
