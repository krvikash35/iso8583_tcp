import { Component, OnInit } from '@angular/core'
import { LogService } from '../data/log.service'
import { DataService } from '../data/data.service'
import { WebSocketService } from './socket.service'
import { Observable, Observer, Subject } from 'rxjs/Rx';

const MSGTYPE = {
  HANDSAKE: 0,
  LOG: 1
}
const CLRCLASS = {
  event: {
    type: 'text-light-green text-darken-4',
    log: 'text-light-green text-darken-1'
  },
  browserSideMessage: {
    type: 'text-indigo text-darken-4',
    log: 'text-indigo text-darken-1'
  },
  isomsgbytes: {
    type: 'text-red text-darken-4',
    log: 'text-red text-darken-1'
  },
  info: {
    type: 'text-teal text-darken-4',
    log: 'text-teal text-darken-1'
  },
  default: {
    type: 'text-teal text-darken-4',
    log: 'text-teal text-darken-1'
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
  showlogtype: string = "event"
  constructor(private logService: LogService, private wsService: WebSocketService, private dataService: DataService) { }

    ngOnInit(): void {
      this.createWebSocket()
      let logmsg = {
        type: 'browserSideMessage',
        log: 'before firing request, make sure to enable log in configuration tab!'
      }
      this.logmsgs.push(logmsg)
    }

    getcssclass(type){
      if(CLRCLASS[type]){
        return CLRCLASS[type]
      }else{
        return CLRCLASS["default"]
      }

    }

    closeWebSocket(){
      this.wsService.close()
    }

    sendMessageToWS(msg, wsid){
      this.wsService.send(msg);
      // this.wsService.getwstester(msg, wsid);
    }

    fireRequest(){
      if(this.wsService.getWebsocket().readyState === WebSocket.OPEN){
        this.getResData()
      }else{
        let logmsg = {
          type: 'browserSideMessage',
          log: 'connection is not in open state ...might be due to server restart or intermittent network connectivity, you can try refreshing page!'
        }
        this.logmsgs.push(logmsg)
        // this.createWebSocket()
      }
    }

    getResData(){
      this.dataService
      .getResData()
      .subscribe((res) =>{
        console.log("LogComponent.fireRequest...response",res)
      }, (err) =>{
        console.log("LogComponent.fireRequest...error", err)
      })
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
        // console.log("response: ", res)
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
