import { Injectable } from '@angular/core';
import { REQDATA, REQFIELDDEF, RESFIELDDEF, PROP } from './sample.data';
import { LogService } from './log.service';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
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

    getReqData(): Observable<any> {
        let reqData = this.readFromLocalStorage('reqData');
        if (!isObjEmtpy(reqData)) {
            return new Observable(ob => {
              ob.next(reqData)
              ob.complete()
            })
        } else {
            this.logService.printInfoMessage('DataService:getReqData:reqData could not be found in cache, will refresh from server and update the cache')
            return this.http.get('service/usr_data')
                .map(res => {
                    this.logService.printInfoMessage('DataService:getReqData:got success response:')
                    let resDatajson = res.json().data
                    this.logService.printDebugMessage(resDatajson)
                    resDatajson = this.cnvrtReqDataObjToArray(resDatajson);
                    resDatajson = this.sortObjArrayByKey(resDatajson, 'key')
                    this.writeToLocalStorage('reqData', resDatajson);
                    return resDatajson
                })
                .catch( (err) => {
                  this.logService.printInfoMessage('got error response from server:')
                  let resErrJson = err.json().data;
                  this.logService.printDebugMessage(resErrJson)
                  return resErrJson
                })
        }
    }


    getResData(): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let body = PROP
      let url = 'service/transrecieve';
      return this.http.post(url, body, options)
          .map(res => {
              this.logService.printInfoMessage('DataService:getResData:got success response from server:')
              let resDatajson = res.json().data
              this.logService.printDebugMessage(resDatajson)
              resDatajson = this.cnvrtReqDataObjToArray(resDatajson);
              resDatajson = this.sortObjArrayByKey(resDatajson, 'key')
              return resDatajson
          })
          .catch( (err) => {
            this.logService.printInfoMessage('DataService:getResData:got error response from server:')
            let resErrJson = err.json().data;
            this.logService.printDebugMessage(resErrJson)
            return resErrJson
          })

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

    sortObjArrayByKey(obj: any, key: any) {
        this.logService.printInfoMessage('DataService:sortObjArrayByKey:ObjectKeyLength:Key='+Object.keys(obj).length+":"+key)
        function compare(a, b) {
            let c = a[key]
            let d = b[key]
            c = parseInt(c.substr(1, c.length - 1))
            d = parseInt(d.substr(1, d.length - 1))
            if (c < d) {
                return -1
            }
            if (c > d) {
                return 1;
            }
            return 0
        }
        let sortedObj = obj.sort(compare)
        return sortedObj;
    }

    cnvrtReqDataObjToArray(src: any): any {
      this.logService.printInfoMessage('DataService:cnvrtReqDataObjToArray:ObjectKeyLength:'+Object.keys(src).length)
        let target: any = [];
        for (let key in src) {
            target.push({ key: key, value: src[key] });
        }
        return target;
    }

    cnvrtReqDataArrayToObj(src: any): any {
      this.logService.printInfoMessage('DataService:cnvrtReqDataArrayToObj:ArrayLength:'+ Object.keys(src).length)
        let target: any = {};
        for (var i = 0; i < src.length; i++) {
            target[src[i].key] = src[i].value
        }
        return target;
    }

}
