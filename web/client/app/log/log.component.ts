import { Component, OnInit } from '@angular/core'
import { LogService } from '../data/log.service'
import { DataService } from '../data/data.service'
import { WebSocketService } from './socket.service'
import { Observable, Observer, Subject } from 'rxjs/Rx';

const MSGTYPE = {
  HANDSAKE: 0,
  LOG: 1
}
const lc = {
  evt: {
    type: 'text-light-green text-darken-4',
    log: 'text-light-green text-darken-1'
  }
}
@Component({
  selector: 'log',
  templateUrl: 'app/log/log.component.html',
  styleUrls: [],
  providers: []
})
export class LogComponent implements OnInit{
  logmsgs: any = [];
  constructor(private logService: LogService, private wsService: WebSocketService, private dataService: DataService) { }

    ngOnInit(): void {
      this.createWebSocket()
    }

    closeWebSocket(){
      this.wsService.close()
    }

    sendMessageToWS(msg, wsid){
      // this.wsService.send(msg);
      this.wsService.getwstester(msg, wsid);
    }

    fireRequest(){
      // this.createWebSocket()
      console.log("getSubjectStatus", this.wsService.getSubjectStatus())
      // this.dataService
      // .getResData()
      // .subscribe((res) =>{
      //   console.log("LogComponent.fireRequest...response",res)
      // }, (err) =>{
      //   console.log("LogComponent.fireRequest...error", err)
      // })
    }

    createWebSocket(){
      let host = window.location.hostname;
      let port = window.location.port;
      let sock_url = "ws://"+host+":"+port;
      this.wsService
      .connect(sock_url)
      .map((response: MessageEvent) => {
        return JSON.parse(response.data);
      })
      .subscribe((res) =>{
        console.log("response: ", res)
        if(res.type == MSGTYPE.HANDSAKE){
          this.dataService.writeToLocalStorage("wsid", res.data.wsid)
        }
        if(res.type == MSGTYPE.LOG){
          this.logmsgs.push(res.data)
        }

      }, (err) => {
        console.log("error: ",err)
      })

    }
}
