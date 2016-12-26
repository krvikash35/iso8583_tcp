import { Injectable } from '@angular/core';
import { REQDATA, RESDATA, REQFIELDDEF, RESFIELDDEF } from './sample.data'

@Injectable()
export class DataService {
  getReqData(): Promise<any>{
     return Promise.resolve( REQDATA );
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
