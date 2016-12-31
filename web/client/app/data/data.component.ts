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
    reqFieldDef: any = {};
    resFieldDef: any = {};
    reqDataEdit: any = {};
    flagObj: any = {
        isreqDataEditFnoValid: false,
        isRequestDivVisible: true,
        isResponseDivVisible: true,
        responseDataStatus: 1
    }
    reqProcStatus: any = {
        type: 'error', //error, success
        msg: ''          //request processing status message
    }

    constructor(private dataService: DataService, private logService: LogService, private sanitizer: DomSanitizer) { }

    ngOnInit(): void {
        this.logService.printInfoMessage("DataComponent:ngOnInit:initialize DataComponent:requesting dataService to getReqData")
        this.dataService.getReqData().subscribe(
            (reqData) => {
                this.logService.printDebugMessage("DataComponent.ngOnInit:getReqData:", reqData)
                this.reqData = reqData;
            },
            (err) => {
              this.logService.printDebugMessage("DataComponent.ngOnInit:getReqData:", err)
            });
        this.dataService.getReqFieldDef().then(reqFieldDef => {
            this.reqFieldDef = reqFieldDef;
        });
        this.dataService.getResFieldDef().then(resFieldDef => {
            this.resFieldDef = resFieldDef;
        });
    }

    addReqDataEditRow(newReqRowData: any) {
        this.logService.printDebugMessage("DataComponent:addReqDataEditRow:newRowToBeAddedInRequestData ", newReqRowData)
        let newrec = [{ key: newReqRowData.fno, value: newReqRowData.fvalue }]
        this.reqData = this.dataService.sortObjArrayByKey(this.reqData.concat(newrec), 'key')
        this.dataService.writeToLocalStorage('reqData', this.reqData);
        this.reqDataEdit = {}
        this.setOrToggleFlag('isreqDataEditFnoValid', false)
    }

    validateReqDataEditFno(fno: any) {
        this.logService.printDebugMessage('DataComponent:validateReqDataEditFno:fieldNumber ', fno)
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
        if (!isnum(fnoi)) {
            return this.reqProcStatus.msg = "character after 'f' should be number";
        }
        if (fnoi == 1) {
            return this.reqProcStatus.msg = "this field no will be automatically send";
        }
        if (fnoi < 0 || fnoi > 127) {
            return this.reqProcStatus.msg = "field no must be between 0 and 127";
        }

        if (!this.reqFieldDef[fno]) {
            return this.reqProcStatus.msg = "This field no is not present in request field definition"
        }

        this.setOrToggleFlag('isreqDataEditFnoValid', true)
        this.reqProcStatus.msg = "";

    }

    setOrToggleFlag(key: any, value: any) {
        this.logService.printDebugMessage("DataComponent.setOrToggleFlag.key:value "+key+":"+value)
        if ( iszerolen(value) ){
          this.flagObj[key] = !this.flagObj[key];
        }else{
          this.flagObj[key] = value;
        }

    }

    exportReqData(): any {
        if(this.reqData && this.reqData.length>0){
          let reqDataObj = this.dataService.cnvrtReqDataArrayToObj(this.reqData)
          let url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(reqDataObj));
          return this.sanitizer.bypassSecurityTrustUrl(url);
        }
    }

    importReqData(event: any): any {
        this.logService.printInfoMessage("DataComponent:importReqData")
        let target = event.target || event.srcElement || event.currentTarget;
        let fileList = target.files;
        let file = fileList[0];
        var that = this;
        target.value = '';
        this.logService.printDebugMessage("DataComponent:importReqData:fileList ", fileList);
        let freader = new FileReader();
        freader.onload = function(event: any) {
            let fileContent = JSON.parse(event.target.result)
            that.logService.printDebugMessage("DataComponent:importReqData:fileContent ", fileContent);
            that.reqData = that.dataService.cnvrtReqDataObjToArray(fileContent);
        }
        freader.readAsText(file);
    }

    removeReqDataRow(rowkey: any): any {
        this.logService.printDebugMessage("DataComponent:removeReqDataRow:rowkey", rowkey);
        let index = this.reqData.findIndex((x: any) => x.key == rowkey);
        this.logService.printDebugMessage("DataComponent:removeReqDataRow:index", index);
        this.reqData.splice(index, 1);
        this.dataService.writeToLocalStorage('reqData', this.reqData)
    }

    onReqDataFVModelChange(key, newValue) {
        this.logService.printDebugMessage("DataComponent:onReqDataFVModelChange:key and new value", key, newValue);
        let updatedReqData = this.dataService.readFromLocalStorage('reqData');
        let index = updatedReqData.findIndex((x: any) => x.key == key);
        updatedReqData[index].value = newValue;
        this.dataService.writeToLocalStorage('reqData', updatedReqData)
    }

    getResponseData(){
      this.logService.printInfoMessage("DataComponent:getResponseData");
      this.setOrToggleFlag('responseDataStatus', 2);
      this.dataService.getResData().subscribe(
          (resData) => {
              this.logService.printDebugMessage("DataComponent.getResponseData:resData:", resData)
              this.resData = resData;
              this.setOrToggleFlag('isRequestDivVisible');
              this.setOrToggleFlag('responseDataStatus', 4);
          },
          (err) => {
            this.logService.printDebugMessage("DataComponent.getResponseData:err:", err)
            this.setOrToggleFlag('responseDataStatus', 3);
          });
    }
}
