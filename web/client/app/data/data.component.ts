import { Component,  OnInit } from '@angular/core'
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
  booleanFlag: any = {
    showRequestSection: true,
    isreqDataEditFnoValid: false
  }
  reqProcStatus: any = {
    type: 'error', //error, success
    msg: ''          //request processing status message
  }

  constructor(private dataService: DataService, private logService: LogService, private sanitizer:DomSanitizer){}
  ngOnInit(): void{
    this.logService.printInfoMessage("DataComponent:ngOnInit:initialize DataComponent:requesting dataService to getReqData")
    this.dataService.getReqData().then( reqData => {
      this.logService.printDebugMessage("DataComponent.ngOnInit:reqDataObj:", reqData)
      this.reqData = this.cnvrtReqDataObjToArray(reqData)
      this.logService.printDebugMessage("DataComponent.ngOnInit:this.reqDataArray:", this.reqData)
    });

    this.dataService.getResData().then(resData => {
      // this.logService.printDebugMessage("DataComponent.ngOnInit:resData", resData)
      for(let key in resData){
        // this.logService.printDebugMessage(key, resData[key])
        this.resData.push( {key: key, value: resData[key] } );
      }
      // this.logService.printDebugMessage("DataComponent.ngOnInit:this.resData", this.resData)
    });

    this.dataService.getReqFieldDef().then(reqFieldDef => {
      // this.logService.printDebugMessage("DataComponent.ngOnInit:reqFieldDef", reqFieldDef)
      // for(let key in reqFieldDef){
      //   this.logService.printDebugMessage(key, reqFieldDef[key])
      //   this.reqFieldDef.push( {key: key, value: reqFieldDef[key] } );
      // }
      this.reqFieldDef = reqFieldDef;
      // this.logService.printDebugMessage("DataComponent.ngOnInit:this.reqFieldDef", this.reqFieldDef)
    });


    this.dataService.getResFieldDef().then(resFieldDef => {
      // this.logService.printDebugMessage("DataComponent.ngOnInit:resFieldDef", resFieldDef)
      // for(let key in resFieldDef){
      //   this.logService.printDebugMessage(key, resFieldDef[key])
      //   this.resFieldDef.push( {key: key, value: resFieldDef[key] } );
      // }
      this.resFieldDef = resFieldDef;
      // this.logService.printDebugMessage("DataComponent.ngOnInit:this.resFieldDef", this.resFieldDef)
    });

  }

  addReqDataEditRow(newReqRowData: any){
    this.logService.printDebugMessage("DataComponent:addReqDataEditRow:newRowToBeAddedInRequestData ", newReqRowData)
    this.reqData.push({key: newReqRowData.fno, value: newReqRowData.fvalue});
    this.reqDataEdit = {}
    this.booleanFlag.isreqDataEditFnoValid = false;
  }

  validateReqDataEditFno(fno: any){
    this.logService.printDebugMessage('DataComponent:validateReqDataEditFno:fieldNumber ', fno)
    this.booleanFlag.isreqDataEditFnoValid = false;
    if(!fno){
       return this.reqProcStatus.msg = ""
    }
    let index = this.reqData.findIndex( (x: any) => x.key==fno);
    if(index>=0){
      return this.reqProcStatus.msg = "This field no is already present in request"
    }
    if( !fno.startsWith('f') ){
      return this.reqProcStatus.msg = "field no must start with char 'f' ";
    }
    let fnoi = fno.substr(1, fno.length-1);
    if( !isnum(fnoi) ){
      return this.reqProcStatus.msg = "character after 'f' should be number";
    }
    if( fnoi == 1 ){
      return this.reqProcStatus.msg = "this field no will be automatically send";
    }
    if(fnoi<0 || fnoi >127 ){
      return this.reqProcStatus.msg = "field no must be between 0 and 127";
    }

    if(!this.reqFieldDef[fno]){
      return this.reqProcStatus.msg = "This field no is not present in request field definition"
    }

    this.booleanFlag.isreqDataEditFnoValid = true;
    this.reqProcStatus.msg = "";

  }

  toggleBooleanFlag(key: any){
    this.logService.printDebugMessage("DataComponent:toggleBooleanFlag:key ", key)
    this.booleanFlag[key] = !this.booleanFlag[key];
  }
  exportReqData(): any{
    // this.logService.printInfoMessage("DataComponent:exportReqData")
    let reqDataObj = this.cnvrtReqDataArrayToObj(this.reqData)
    let url = 'data:text/json;charset=utf8,' + encodeURIComponent( JSON.stringify(reqDataObj) );
    // this.logService.printDebugMessage("DataComponent:exportReqData:urlToBeDownloaded:", url)
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  importReqData(event: any): any{
    this.logService.printInfoMessage("DataComponent:importReqData")
    let target = event.target || event.srcElement || event.currentTarget;
    let fileList = target.files;
    let file = fileList[0];
    var that = this;
    target.value='';
    this.logService.printDebugMessage("DataComponent:importReqData:fileList ", fileList);
    let freader = new FileReader();
    freader.onload = function(event: any){
      let fileContent = JSON.parse(event.target.result)
      that.logService.printDebugMessage("DataComponent:importReqData:fileContent ", fileContent);
      that.reqData = that.cnvrtReqDataObjToArray(fileContent);
    }
    freader.readAsText(file);
  }

  removeReqDataRow(rowkey: any): any{
    this.logService.printDebugMessage("DataComponent:removeReqDataRow:rowkey", rowkey);
    let index = this.reqData.findIndex( (x: any) => x.key==rowkey);
    this.logService.printDebugMessage("DataComponent:removeReqDataRow:index", index);
    this.reqData.splice(index, 1);
  }

  cnvrtReqDataObjToArray(src: any): any{
    let target: any = [];
    for(let key in src){
      target.push( {key: key, value: src[key] } );
    }
    return target;
  }

  cnvrtReqDataArrayToObj(src: any): any{
    let target: any = {};
    for(var i=0; i<src.length; i++){
      target[src[i].key] = src[i].value
    }
    return target;
  }
}
