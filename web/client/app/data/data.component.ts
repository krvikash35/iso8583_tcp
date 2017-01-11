import { Component, OnInit } from '@angular/core'
import { DataService } from './data.service'
import { LogService } from './log.service'
import { DomSanitizer} from '@angular/platform-browser';
import { FocusOnInit } from './data.directive'

@Component({
    selector: 'data',
    templateUrl: 'app/data/data.component.html',
    styleUrls: []
    // providers: [DataService]
})
export class DataComponent implements OnInit {
    reqData: any = [];
    resData: any = [];
    resErrorData: any = [];
    reqFieldDef: any = {};
    resFieldDef: any = {};
    prop: any = {};
    reqDataEdit: any = {};
    resTimeoutCntr: number = 40;
    exportFileName: string = "balanceInquery.json";
    flagObj: any = {
        isreqDataEditFnoValid: false,
        isRequestDivVisible: true,
        isResponseDivVisible: true,
        responseDataStatus: 1,
        isSendBtnDisabled: false
    }
    reqProcStatus: any = {
        type: 'error', //error, success
        msg: ''          //request processing status message
    }

    constructor(private dataService: DataService, private logService: LogService, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.logService.logEvent("DataComponent.ngOnInit...initialize DataComponent...requesting dataService to getReqData!")
        this.dataService.getReqData().subscribe(
            (data) => {
                this.logService.logEvent("DataComponent.ngOnInit.getReqData...dataService returned success ")
                this.logService.logInfo("DataComponent.ngOnInit.getReqData.data:", data)
                this.reqData = data.reqData;
                this.reqFieldDef = data.reqFieldDef;
                this.resFieldDef = data.resFieldDef;
                this.prop = data.prop;
            },
            (err) => {
                this.logService.logEvent("DataComponent.ngOnInit.getReqData...dataService returned error")
                this.logService.logInfo("DataComponent.ngOnInit.getReqData.err:", err)
            });
    }

    addReqDataEditRow(newReqRowData: any) {
        this.logService.logEvent("DataComponent.addReqDataEditRow...add new row in request data! ")
        this.logService.logInfo("DataComponent.addReqDataEditRow.newRowToBeAddedInRequestData:", newReqRowData)
        let newrec = [{ key: newReqRowData.fno, value: newReqRowData.fvalue }]
        this.reqData = this.dataService.sortObjArrayByKey(this.reqData.concat(newrec), 'key')
        this.dataService.writeToLocalStorage('reqData', this.reqData);
        this.reqDataEdit = {}
        this.setOrToggleFlag('isreqDataEditFnoValid', false)
    }

    validateReqDataEditFno(fno: any) {
        this.logService.logInfo('DataComponent:validateReqDataEditFno:fieldNumber ', fno)
        this.setOrToggleFlag('isreqDataEditFnoValid', false)
        if (!fno) {
            return this.reqProcStatus.msg = ""
        }
        let index = this.reqData.findIndex((x: any) => x.key == fno);
        if (index >= 0) {
            return this.reqProcStatus.msg = "This field no is already present in request"
        }
        if (!fno.startsWith('f')) {
            return this.reqProcStatus.msg = "field no must start with char 'f' ";
        }
        let fnoi = fno.substr(1, fno.length - 1);
        if (fnoi.length==0 || isNaN(fnoi)) {
            return this.reqProcStatus.msg = "character after 'f' should be number";
        }
        if (fnoi == 1) {
            return this.reqProcStatus.msg = "this field no will be automatically send";
        }
        if (fnoi < 0 || fnoi > 128) {
            return this.reqProcStatus.msg = "field no must be between 0 and 127";
        }

        if (!this.reqFieldDef[fno]) {
            return this.reqProcStatus.msg = "This field no is not present in request field definition"
        }

        this.setOrToggleFlag('isreqDataEditFnoValid', true)
        this.reqProcStatus.msg = "";

    }

    setOrToggleFlag(key: any, value?: any) {
        this.logService.logInfo("DataComponent.setOrToggleFlag.key:value " + key + ":" + value)
        if (value === undefined || value === null || value.length==0) {
            this.flagObj[key] = !this.flagObj[key];
        } else {
            this.flagObj[key] = value;
        }

    }

    exportReqData(): any {
        this.logService.logEvent("DataComponent.exportReqData...export request data")
        if (this.reqData && this.reqData.length > 0) {
            let reqDataObj = this.dataService.cnvrtReqDataArrayToObj(this.reqData)
            let url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(reqDataObj, null, 4));
            return this.sanitizer.bypassSecurityTrustUrl(url);
        }
    }

    importReqData(event: any): any {
        this.logService.logEvent("DataComponent.importReqData...import request data")
        let target = event.target || event.srcElement || event.currentTarget;
        let fileList = target.files;
        let file = fileList[0];
        var that = this;
        target.value = '';
        this.logService.logInfo("DataComponent:importReqData:fileList ", fileList);
        let freader = new FileReader();
        freader.onload = function(event: any) {
            let fileContent = JSON.parse(event.target.result)
            that.logService.logInfo("DataComponent:importReqData:fileContent ", fileContent);
            that.reqData = that.dataService.cnvrtReqDataObjToArray(fileContent);
            that.dataService.writeToLocalStorage("reqData", that.reqData);
            that.logService.logEvent("DataComponent.importReqData...updated cache!")
        }
        freader.readAsText(file);
    }

    removeReqDataRow(rowkey: any): any {
        this.logService.logEvent("DataComponent.addReqDataEditRow...remove row from request data! ")
        this.logService.logInfo("DataComponent:removeReqDataRow:rowkey", rowkey);
        let index = this.reqData.findIndex((x: any) => x.key == rowkey);
        this.logService.logInfo("DataComponent:removeReqDataRow:index", index);
        this.reqData.splice(index, 1);
        this.dataService.writeToLocalStorage('reqData', this.reqData)
    }

    onReqDataFVModelChange(key, newValue) {
        this.logService.logEvent("DataComponent.onReqDataFVModelChange...change detected in request data!")
        this.logService.logInfo("DataComponent:onReqDataFVModelChange.key and new value", key, newValue);
        let updatedReqData = this.dataService.readFromLocalStorage('reqData');
        let index = updatedReqData.findIndex((x: any) => x.key == key);
        updatedReqData[index].value = newValue;
        this.dataService.writeToLocalStorage('reqData', updatedReqData)
    }

    getResponseData() {
        this.logService.logEvent("DataComponent.getResponseData...calling dataService to get the response data!");
        this.setOrToggleFlag('responseDataStatus', 2);
        this.setOrToggleFlag('isSendBtnDisabled');
        let prop = this.dataService.readFromLocalStorage("prop");
        this.resTimeoutCntr = parseInt(prop.personal.http_timeout) + parseInt(prop.personal.tcp_timeout);
        let  respCntr = setInterval( () => { this.resTimeoutCntr = this.resTimeoutCntr - 1; }, 1000);
        setTimeout(() => { clearInterval(respCntr)}, this.resTimeoutCntr*1000)
        this.dataService.getResData().subscribe(
            (resData) => {
                clearInterval(respCntr)
                this.logService.logInfo("DataComponent.getResponseData:resData:", resData)
                this.resData = resData;
                this.setOrToggleFlag('isRequestDivVisible');
                this.setOrToggleFlag('responseDataStatus', 4);
                this.setOrToggleFlag('isSendBtnDisabled');
            },
            (err) => {
                clearInterval(respCntr)
                this.logService.logInfo("DataComponent.getResponseData:err:", err);
                this.resErrorData = err;
                // console.log(err.toString())
                this.setOrToggleFlag('isRequestDivVisible');
                this.setOrToggleFlag('responseDataStatus', 3);
                this.setOrToggleFlag('isSendBtnDisabled');
            });
    }


    getExportFileName(){
      if(!this.exportFileName){
        return "balanceInquery.json"
      }else{
        let temp = this.exportFileName.split(".");
        if(temp){
          return temp[0]+".json"
        }else{
          return temp+".json"
        }
      }
    }
}
