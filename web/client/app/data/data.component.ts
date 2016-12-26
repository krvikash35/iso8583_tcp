import { Component,  OnInit } from '@angular/core'
import { DataService } from './data.service'

@Component({
  selector: 'data',
  templateUrl: 'app/data/data.component.html',
  styleUrls: [],
  providers: [DataService]
})
export class DataComponent implements OnInit {
  reqData: any = null;
  resData: any = null;
  reqFieldDef: any = null;
  resFieldDef: any = null;
  constructor(private dataService: DataService){}
  ngOnInit(): void{
    console.log("ngOnInit lifeCycle..initialize DataComponent: ")
    this.dataService.getReqData().then(reqData => this.reqData=reqData);
    this.dataService.getResData().then(resData => this.resData=resData);
    this.dataService.getReqFieldDef().then(reqFieldDef => this.reqFieldDef=reqFieldDef);
    this.dataService.getResFieldDef().then(resFieldDef => this.resFieldDef=resFieldDef);
  }
}
