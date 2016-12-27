import { Component,  OnInit } from '@angular/core'
import { DataService } from './data.service'

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

  constructor(private dataService: DataService){}
  ngOnInit(): void{
    console.log("ngOnInit lifeCycle..initialize DataComponent: ")
    this.dataService.getReqData().then( reqData => {
      console.log("DataComponent.ngOnInit:reqData", reqData)
      this.reqData = this.cnvrtReqDataObjToArray(reqData)
      console.log("DataComponent.ngOnInit:this.reqData", this.reqData)
    });

    this.dataService.getResData().then(resData => {
      console.log("DataComponent.ngOnInit:resData", resData)
      for(let key in resData){
        console.log(key, resData[key])
        this.resData.push( {key: key, value: resData[key] } );
      }
      console.log("DataComponent.ngOnInit:this.resData", this.resData)
    });

    this.dataService.getReqFieldDef().then(reqFieldDef => {
      console.log("DataComponent.ngOnInit:reqFieldDef", reqFieldDef)
      // for(let key in reqFieldDef){
      //   console.log(key, reqFieldDef[key])
      //   this.reqFieldDef.push( {key: key, value: reqFieldDef[key] } );
      // }
      this.reqFieldDef = reqFieldDef;
      console.log("DataComponent.ngOnInit:this.reqFieldDef", this.reqFieldDef)
    });


    this.dataService.getResFieldDef().then(resFieldDef => {
      console.log("DataComponent.ngOnInit:resFieldDef", resFieldDef)
      // for(let key in resFieldDef){
      //   console.log(key, resFieldDef[key])
      //   this.resFieldDef.push( {key: key, value: resFieldDef[key] } );
      // }
      this.resFieldDef = resFieldDef;
      console.log("DataComponent.ngOnInit:this.resFieldDef", this.resFieldDef)
    });

  }

  downloadReqData(): any{
    let reqDataObj = this.cnvrtReqDataArrayToObj(this.reqData)
    // let url = 'data:plain/text;charset=utf8,' + encodeURIComponent( JSON.stringify(reqDataObj) );
    let url = 'data:application/octet-stream;charset=utf8,' + encodeURIComponent( JSON.stringify(reqDataObj) );
    window.open(url, '_blank')
    window.focus();
  }

  uploadReqData(): any{

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
