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
    reqData: any = {};
    constructor(private logService: LogService, private http: Http) {
        let reqData = this.readFromLocalStorage('reqData');
        if (isObjEmtpy(reqData)) {
            console.log('reqData could not be found in cache, will refresh from server and update the cache')
            this.http
            .get('service/reqData')
            .subscribe(res => {
              this.logService.printDebugMessage("DataService:resExtractor:response:", res.json())
            })
            // reqData = REQDATA
            // this.writeToLocalStorage('reqData', reqData)
        }
        this.reqData = reqData;
    }
    resExtractor(res) {
        this.logService.printDebugMessage("DataService:resExtractor:response:", res.json().data)
        return res.json().data
    }
    errorHandler(err) {
        this.logService.printDebugMessage("DataService:resExtractor:error:", err.json().data)
        return Observable.throw(err.json().data)
    }

    getReqData(): Promise<any> {
        return Promise.resolve(this.reqData);
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
