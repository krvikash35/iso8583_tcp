import { Injectable } from '@angular/core';
import { LogService } from '../data/log.service';
import { DataService } from '../data/data.service';

@Injectable()
export class FieldService {
    constructor(private logService: LogService, private dataService: DataService) {

    }

    getfdlistArr(): Array<any>{
      let fdlistArr = []
      return fdlistArr;
    }

    getfdlistObj(): Object{
      this.logService.logEvent("FieldService.getfdlistObj...requesting dataService to get from cache!")
      let fdlist = this.dataService.readFromLocalStorage("fieldDefList");
      this.logService.logInfo("FieldService.getfdlistObj..fdlist object: ", fdlist);
      console.log(fdlist)
      return fdlist;
    }

    writeToLocalStorage(key, value){
      this.dataService.writeToLocalStorage(key, value)
    }

    convertCDCIToJson(cdcicfg: any){
      let cdcicfg_in_json;
      try{
        cdcicfg_in_json = getFieldSpecForCtrlId(cdcicfg)
      }catch(e){
        throw e
      }
      return cdcicfg_in_json
    }

    cnvrtReqDataObjToArray(obj: any){
      return this.dataService.cnvrtReqDataObjToArray(obj);
    }

    sortObjArrayByKey(obj: any, key: any){
      return this.dataService.sortObjArrayByKey(obj, key);
    }
}



function getFieldSpecForCtrlId(cfgContent){
  let contrlrList;
  try {
    contrlrList = getListOfContrlr(cfgContent)
  } catch (e) {
    throw e;
  }
  let fspecList = [];
  let out = {};
  fspecList = cfgContent.split("<Controller_Id>");
  fspecList.shift();
  console.log("getFieldSpecForCtrlId: getting field definition one by one for each controller");
  for(var i=0; i<fspecList.length;i++){
    console.log("getFieldSpecForCtrlId: getting field definition for controller ", contrlrList[i]);
    let ctrlFieldDef = getFieldDefForCtrlId(fspecList[i], contrlrList[i]);
    addDefaultDef(ctrlFieldDef);
    out[contrlrList[i]] = ctrlFieldDef
  }
  console.log(out);
  return out;
}


function getListOfContrlr(cfgContent){
  let contrlrList = []
  let search = /<Controller_Id>\s*\w.*/gmi
  let result = cfgContent.match(search);
  console.log("getListOfContrlr: ", result);
  if(!result){
    throw new Error("fieldService.getListOfContrlr...not a single Controller_Id found in cdci.cfg, make sure you are importing valid cdci.cfg file ");
  }
  for(var i=0; i<result.length; i++){
    let ctrl = result[i].split(">")[1].trim();
    contrlrList.push(ctrl);
  }
  return contrlrList;
}


function getFieldDefForCtrlId(fldSpec, ctrlrId){
  let fldList = [];
  let fn, flentype, fmaxlen, fdesc, result ={};
  fldList = fldSpec.split("<Field>");
  fldList.shift();
  console.log("getFieldDefForCtrlId: ", fldList.length, " field founds ");
  for(var i=0; i<fldList.length; i++){
    console.log("\ngetFieldDefForCtrlId: Going to get field definition for field no " , fn, " and controller Id ", ctrlrId, "\ncontent is ", fldList[i]);
    let temp: any = {}
    fn = parseInt(getFieldNo(fldList[i]));
    flentype = parseInt(getFieldLenType(fldList[i]));
    fmaxlen = parseInt(getFieldMaxLen(fldList[i]));
    fdesc = getFieldDesc(fldList[i]);
    temp.lentype = flentype;
    temp.maxlen = fmaxlen;
    temp.desc = fdesc;
    result["f"+fn] = temp;
    console.log("getFieldDefForCtrlId: Got field definition for field no " , fn, result["f"+fn] , "\n");
  }
  return result;
}

function getFieldNo(fieldContent){
  let search = /<Field_No>\s*\w.*/gmi
  let result = fieldContent.match(search);
  console.log("getFieldNo: result...", result);
  return result[0].split(">")[1].trim();
}

function getFieldLenType(fieldContent){
  let search = /<Length_Bytes>\s*\w.*/gmi
  let result = fieldContent.match(search);
  console.log("getFieldLenType: result...", result);
  return result[0].split(">")[1].trim();
}

function getFieldMaxLen(fieldContent){
  let search = /<Max_Len>\s*\w.*/gmi
  let result = fieldContent.match(search);
  console.log("getFieldLenType: result...", result);
  return result[0].split(">")[1].trim();
}

function getFieldDesc(fieldContent){
  let search = /<Field_Name>\s*\w.*/gmi
  let result = fieldContent.match(search);
  console.log("getFieldDesc: result...", result);
  return result[0].split(">")[1].trim();
}


function addDefaultDef(ctrlFdef){
  let f0 = {
      'maxlen': 4,
      'lentype': 0,
      'desc': 'Message Type Indicator'
  }
  let f1 = {
      'maxlen': 16,
      'lentype': 'CONTVAR',
      'desc': 'Primary/Secondary Bitmap'
  }
  ctrlFdef.f0 = f0;
  ctrlFdef.f1 = f1;
  return ctrlFdef;
}
