import { Injectable } from '@angular/core';
import { REQDATA, RESDATA, REQFIELDDEF, RESFIELDDEF } from './sample.data';
import { LogService } from './log.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

@Injectable()
export class DataService {
    constructor(private logService: LogService, private http: Http) {

    }

    getReqData(): Promise<any> {
      let reqData = this.readFromLocalStorage('reqData');
      if (!isObjEmtpy(reqData)) {
        return Promise.resolve(reqData)
      }else{
        this.logService.printInfoMessage('reqData could not be found in cache, will refresh from server and update the cache')
        return this.http.get('service/usr_data').map(res => {
          let resDatajson = res.json().data
          this.writeToLocalStorage('reqData', resDatajson); return resDatajson
        }).toPromise()
      }
    }

    setReqData() {

    }

    getResData(): Promise<any> {
        return Promise.resolve(RESDATA);
    }

    getReqFieldDef(): Promise<any> {
        return Promise.resolve(REQFIELDDEF);
    }

    getResFieldDef(): Promise<any> {
        return Promise.resolve(RESFIELDDEF);
    }

    readFromLocalStorage(key: any) {
        let value = JSON.parse(localStorage.getItem(key))
        return value;
    }


    writeToLocalStorage(key: any, value: any) {
        value = JSON.stringify(value)
        localStorage.setItem(key, value);
    }

}
