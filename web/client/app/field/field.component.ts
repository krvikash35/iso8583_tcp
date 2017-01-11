import { Component } from '@angular/core'
import { FieldService } from './field.service'
import { LogService } from '../data/log.service'
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'field',
  templateUrl: 'app/field/field.component.html',
  styleUrls: [],
  providers: [FieldService]
})
export class FieldComponent{
  showErrorDiv = false;
  errorDetail = {};
  fdlistArr = [];
  fdlistObj = {};
  fdlistKeyArr = [];
  currentfdObjArr = [];
  currentfdKey = this.fdlistKeyArr[0];
  // fdlistKeyArr = Object.keys(this.fdlistObj);
  exportFileName = "my_field_definition.json"

  constructor(private fieldService: FieldService, private logService: LogService, private sanitizer: DomSanitizer) { }


  ngOnInit(): void {
      this.logService.logEvent("FieldComponent.ngOnInit...initializing, requesting fieldService to fetch data!")
      // this.fdlistObj = this.fieldService.getfdlistArr();
      this.fdlistObj = this.fieldService.getfdlistObj();
      this.fdlistKeyArr = Object.keys(this.fdlistObj);
      this.currentfdKey = this.fdlistKeyArr[0];
      this.currentfdObjArr = this.fieldService.cnvrtReqDataObjToArray(this.fdlistObj[this.currentfdKey])
      this.currentfdObjArr = this.fieldService.sortObjArrayByKey(this.currentfdObjArr, "key")
  }


  update_currentfdObjArr(){
    this.logService.logEvent("FieldComponent.update_currentfdObjArr...update fd on change of list key!")
    this.currentfdObjArr = this.fieldService.cnvrtReqDataObjToArray(this.fdlistObj[this.currentfdKey])
    this.currentfdObjArr = this.fieldService.sortObjArrayByKey(this.currentfdObjArr, "key")
  }

  exportFieldDefData(): any {
      this.logService.logEvent("FieldComponent.exportFieldDefData...export config data")
      let url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(this.fdlistObj, null, 4));
      return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getExportFileName() {
      if (!this.exportFileName) {
          return "my_field_definition.json"
      } else {
          let temp = this.exportFileName.split(".");
          if (temp) {
              return temp[0] + ".json"
          } else {
              return temp + ".json"
          }
      }
  }

  importFieldDefData(event: any): any {
    this.logService.logEvent("FieldComponent.importFieldDefData...import field definition data")
    let target = event.target || event.srcElement || event.currentTarget;
    let fileList = target.files;
    let file = fileList[0];
    var that = this;
    target.value = '';
    this.logService.logInfo("FieldComponent:importFieldDefData:fileList ", fileList);
    let freader = new FileReader();
    freader.onload = function(event: any) {
      let fileContent;
      try {
        fileContent = JSON.parse(event.target.result)
      } catch (e) {
        that.showErrorDiv=true;
        e.message = "FieldComponent.importFieldDefData...Not a valid json data..please make sure the file data is in proper json format before importing..if you importing cdci.cfg, use other right side button "
        that.errorDetail = e;
        //

        // console.log("name", e.name)
        // console.log("message", e.message)
        // console.log("stack", e.stack)
        return
      }

        that.fdlistObj = fileContent;
        that.fdlistKeyArr = Object.keys(that.fdlistObj);
        that.logService.logInfo("FieldComponent:importFieldDefData:fileContent ", fileContent);
        that.fieldService.writeToLocalStorage("fieldDefList", fileContent);
        that.logService.logEvent("FieldComponent.importFieldDefData...updated cache!");
        that.fdlistKeyArr = Object.keys(that.fdlistObj);
        that.currentfdKey = that.fdlistKeyArr[0];
        that.update_currentfdObjArr();
    }
    freader.readAsText(file);
  }

  importUsingCDCIData(event: any): any {
    this.logService.logEvent("FieldComponent.importUsingCDCIData...import field definition data")
    let target = event.target || event.srcElement || event.currentTarget;
    let fileList = target.files;
    let file = fileList[0];
    var that = this;
    target.value = '';
    this.logService.logInfo("FieldComponent:importUsingCDCIData:fileList ", fileList);
    let freader = new FileReader();
    freader.onload = function(event: any) {
        // let fileContent = JSON.parse(event.target.result)


        let fileContent = event.target.result
        that.logService.logInfo("FieldComponent:importUsingCDCIData:fileContent ", fileContent);
        // that.fdlistObj = that.fieldService.convertCDCIToJson(fileContent);

        try {
          that.fdlistObj = that.fieldService.convertCDCIToJson(fileContent);
        } catch (e) {
          that.showErrorDiv=true;
          that.errorDetail = e;
          return
        }

        that.logService.logInfo("FieldComponent:importUsingCDCIData: after converting cdci.cfg to json: ", that.fdlistObj);
        that.fieldService.writeToLocalStorage("fieldDefList", that.fdlistObj);
        that.logService.logEvent("FieldComponent.importUsingCDCIData...updated cache!");
        that.fdlistKeyArr = Object.keys(that.fdlistObj);
        that.currentfdKey = that.fdlistKeyArr[0];
        that.update_currentfdObjArr();
    }
    freader.readAsText(file);
  }

}
