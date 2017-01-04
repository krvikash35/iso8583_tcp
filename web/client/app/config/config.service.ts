import { Injectable } from '@angular/core';
import { LogService } from '../data/log.service';
import { DataService } from '../data/data.service';
import { PROP } from './config.templete'

@Injectable()
export class ConfigService {
    constructor(private logService: LogService, private dataService: DataService) {

    }
    getConfigObj(){
      let configObj = this.dataService.readFromLocalStorage('prop');
      return configObj;
    }

    getPropTemplte(){
      return PROP;
    }

    getFieldDefList(){
      let fdlist = this.dataService.readFromLocalStorage('fieldDefList');
      return Object.keys(fdlist)
    }
}
