import { Injectable } from '@angular/core';
import { LogService } from '../data/log.service';
import { DataService } from '../data/data.service';
import { PROP } from './config.templete'

@Injectable()
export class ConfigService {
    constructor(private logService: LogService, private dataService: DataService) {

    }
    getConfigObj(){
      this.logService.logEvent("ConfigService.getConfigObj...will get config object from cache!");
      let configObj = this.dataService.readFromLocalStorage('prop');
      return configObj;
    }
    setConfigObj(sectionKey: any, configValue: any){
      let configObj = this.dataService.readFromLocalStorage('prop');
      configObj[sectionKey] = configValue[sectionKey];
      this.dataService.writeToLocalStorage('prop', configObj);
    }

    getPropTemplte(){
      return PROP;
    }

    getFieldDefList(){
      let fdlist = this.dataService.readFromLocalStorage('fieldDefList');
      return Object.keys(fdlist)
    }

    writeToLocalStorage(key, value){
      this.dataService.writeToLocalStorage(key, value)
    }
}
