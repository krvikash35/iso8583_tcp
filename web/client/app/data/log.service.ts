import { Injectable } from '@angular/core';

@Injectable()
export class LogService{
  logLevel: number = 3;
  printErrorMessage(...args){
    if(this.logLevel >= 1){
      for(var i=0; i<args.length; i++){
        console.log(args[i])
      }
    }
  }

  printInfoMessage(...args){
    if(this.logLevel >= 2){
      for(var i=0; i<args.length; i++){
        console.log(args[i])
      }
    }
  }

  printDebugMessage(...args){
    if(this.logLevel >= 3){
      for(var i=0; i<args.length; i++){
        console.log(args[i])
      }
    }
  }


}
