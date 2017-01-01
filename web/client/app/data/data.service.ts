import { Injectable } from '@angular/core';
import { REQDATA, REQFIELDDEF, RESFIELDDEF, PROP } from './sample.data';
import { LogService } from './log.service';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
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
          let reqFieldDef = this.getFieldDefinition('reqFieldDefkey');
          let resFieldDef = this.getFieldDefinition('resFieldDefkey');
          let prop = this.readFromLocalStorage('prop');
          let returnObj = {
            reqData: reqData,
            reqFieldDef: reqFieldDef,
            resFieldDef: resFieldDef,
            prop: prop
          }
            return new Observable(ob => {
              ob.next(returnObj)
              ob.complete()
            })
        } else {
            this.logService.printInfoMessage('DataService:getReqData:reqData could not be found in cache, will refresh from server and update the cache')
            let params: URLSearchParams = new URLSearchParams();
            params.set('key', 'defaultReqData');
            return this.http.get('service/getDefaultData', {search: params})
                .map(res => {
                    this.logService.printInfoMessage('DataService:getReqData:got success response:')
                    let resDatajson = res.json().data
                    this.logService.printDebugMessage(resDatajson)
                    let defaultReqData = this.cnvrtReqDataObjToArray(resDatajson.defaultReqData);
                    defaultReqData = this.sortObjArrayByKey(defaultReqData, 'key')
                    this.writeToLocalStorage('reqData', defaultReqData);

                    let defaultFieldDefList = resDatajson.defaultFieldDefList;
                    this.writeToLocalStorage('fieldDefList', defaultFieldDefList);
                    this.writeToLocalStorage('reqFieldDefkey', 'iso8583_1993_cmn');
                    this.writeToLocalStorage('resFieldDefkey', 'iso8583_1993_cmn');
                    let defaultReqFieldDef = defaultFieldDefList.iso8583_1993_cmn;
                    let defaultResFieldDef = defaultFieldDefList.iso8583_1993_cmn;
                    let defaultProp = resDatajson.defaultProp
                    this.writeToLocalStorage('prop', defaultProp);

                    let returnObj = {
                      reqData: defaultReqData,
                      reqFieldDef: defaultReqFieldDef,
                      resFieldDef: defaultResFieldDef,
                      prop: defaultProp
                    }

                    return returnObj
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
      let prop = this.readFromLocalStorage('prop');
      let reqData = this.readFromLocalStorage('reqData');
      reqData = this.cnvrtReqDataArrayToObj(reqData);
      let reqFieldDef = this.getFieldDefinition('reqFieldDefkey');
      let resFieldDef = this.getFieldDefinition('resFieldDefkey');
      prop.personal.reqData = reqData;
      prop.client.field_def - reqFieldDef;
      prop.server.field_def = resFieldDef;
      let body = prop;
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

    getFieldDefinition(key: any){
      let fdlist = this.readFromLocalStorage('fieldDefList');
      let fdlistkey =  this.readFromLocalStorage(key);
      return fdlist[fdlistkey];
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
