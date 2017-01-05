import { Component } from '@angular/core'

@Component({
  selector: 'field',
  templateUrl: 'app/field/field.component.html',
  styleUrls: []
})
export class FieldComponent{

  exportFieldDefinition(): any {
      this.logService.logEvent("DataComponent.exportReqData...export request data")
      if (this.reqData && this.reqData.length > 0) {
          let reqDataObj = this.dataService.cnvrtReqDataArrayToObj(this.reqData)
          let url = 'data:text/json;charset=utf8,' + encodeURIComponent(JSON.stringify(reqDataObj));
          return this.sanitizer.bypassSecurityTrustUrl(url);
      }
  }

  importFieldDefinition(event: any): any {
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

  importUsingCDCI(): any{
    
  }

}
