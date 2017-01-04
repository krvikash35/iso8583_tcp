import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ConfigService } from './config.service'
import { LogService } from '../data/log.service'

@Component({
  selector: 'config',
  templateUrl: 'app/config/config.component.html',
  styleUrls: [],
  providers: [ConfigService]
})
export class ConfigComponent implements OnInit{
  prop = {};
  config = {};
  fdlist = [];
  constructor(private configService: ConfigService, private logService: LogService, private router: Router) { }
  ngOnInit(): void {
    this.logService.logEvent("ConfigComponent.ngOnInit...initializing, requesting configService to fetch data!")
    this.config = this.configService.getConfigObj();
    this.prop = this.configService.getPropTemplte();
    // if(!this.config){
    //   this.logService.logEvent("ConfigComponent.ngOnInit...configObj not found in cache, redirect to data component to refresh from server!")
    //   this.router.navigateByUrl('app/data');
    // }
    this.fdlist = this.configService.getFieldDefList();
  }

  update_config(sectionKey: any){
    this.configService.setConfigObj(sectionKey, this.config)
  }
}
