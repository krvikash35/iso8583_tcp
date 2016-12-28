import { Injectable } from '@angular/core';
import { REQDATA, RESDATA, REQFIELDDEF, RESFIELDDEF } from './sample.data'

@Injectable()
export class DataService {
  name: any="vikash";
  getReqData(): Promise<any>{
    console.log("getReqData.name: before", this.name)
    this.name= "kumar"
    console.log("getReqData.name: after", this.name)
     return Promise.resolve( REQDATA );

  }

  setReqData(){

  }

  getResData(): Promise<any>{
     return Promise.resolve( RESDATA );
  }

  getReqFieldDef(): Promise<any>{
     return Promise.resolve( REQFIELDDEF );
  }

  getResFieldDef(): Promise<any>{
     return Promise.resolve( RESFIELDDEF );
  }

}
