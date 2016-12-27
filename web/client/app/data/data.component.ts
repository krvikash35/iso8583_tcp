import { Component,  OnInit } from '@angular/core'
import { DataService } from './data.service'
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'data',
  templateUrl: 'app/data/data.component.html',
  styleUrls: [],
  providers: [DataService]
})
export class DataComponent implements OnInit {
  reqData: any = [];
  resData: any = [];
  reqFieldDef: any = {};
  resFieldDef: any = {};

  constructor(private dataService: DataService, private sanitizer:DomSanitizer){}
  ngOnInit(): void{
    console.log("ngOnInit lifeCycle..initialize DataComponent: ")
    this.dataService.getReqData().then( reqData => {
      // console.log("DataComponent.ngOnInit:reqData", reqData)
      this.reqData = this.cnvrtReqDataObjToArray(reqData)
      // console.log("DataComponent.ngOnInit:this.reqData", this.reqData)
    });

    this.dataService.getResData().then(resData => {
      // console.log("DataComponent.ngOnInit:resData", resData)
      for(let key in resData){
        // console.log(key, resData[key])
        this.resData.push( {key: key, value: resData[key] } );
      }
      // console.log("DataComponent.ngOnInit:this.resData", this.resData)
    });

    this.dataService.getReqFieldDef().then(reqFieldDef => {
      // console.log("DataComponent.ngOnInit:reqFieldDef", reqFieldDef)
      // for(let key in reqFieldDef){
      //   console.log(key, reqFieldDef[key])
      //   this.reqFieldDef.push( {key: key, value: reqFieldDef[key] } );
      // }
      this.reqFieldDef = reqFieldDef;
      // console.log("DataComponent.ngOnInit:this.reqFieldDef", this.reqFieldDef)
    });


    this.dataService.getResFieldDef().then(resFieldDef => {
      // console.log("DataComponent.ngOnInit:resFieldDef", resFieldDef)
      // for(let key in resFieldDef){
      //   console.log(key, resFieldDef[key])
      //   this.resFieldDef.push( {key: key, value: resFieldDef[key] } );
      // }
      this.resFieldDef = resFieldDef;
      // console.log("DataComponent.ngOnInit:this.resFieldDef", this.resFieldDef)
    });

  }

  exportReqData(): any{
    let reqDataObj = this.cnvrtReqDataArrayToObj(this.reqData)
    let url = 'data:text/json;charset=utf8,' + encodeURIComponent( JSON.stringify(reqDataObj) );
    return this.sanitizer.bypassSecurityTrustUrl(url);
    // window.open(url, '_blank')
    // window.focus();
  }

  importReqData(event: any): any{
    let target = event.target || event.srcElement || event.currentTarget;
    let fileList = target.files;
    let file = fileList[0];
    var that = this;
    if(target.value){
      console.log("target value is defined: ", target.value)
    }else{
      console.log("target value is not defined: ", target.value)
    }
    target.value='';
    console.log("DataComponent.importReqData:file ", file);
    let freader = new FileReader();
    freader.onload = function(event: any){
      console.log("filecontent", event.target.result);
      that.reqData = that.cnvrtReqDataObjToArray(JSON.parse(event.target.result));
    }
    freader.readAsText(file);
  }

  removeReqDataRow(rowkey: any): any{
    console.log("DataComponent.removeReqDataRow:rowkey", rowkey);
    let index = this.reqData.findIndex( (x: any) => x.key==rowkey);
    console.log("DataComponent.removeReqDataRow:index", index);
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
