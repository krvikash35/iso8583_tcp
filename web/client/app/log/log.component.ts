import { Component, OnInit } from '@angular/core'
import { LogService } from '../data/log.service'
import { DataService } from '../data/data.service'
import { WebSocketService } from './socket.service'
import { Observable, Observer, Subject } from 'rxjs/Rx';

@Component({
  selector: 'log',
  templateUrl: 'app/log/log.component.html',
  styleUrls: [],
  providers: [WebSocketService]
})
export class LogComponent implements OnInit{

  constructor(private logService: LogService, private wsService: WebSocketService, private dataService: DataService) { }

    ngOnInit(): void {

    }

    closeWebSocket(){
      this.wsService.close()
    }

    sendMessageToWS(msg, wsid){
      // this.wsService.send(msg);
      this.wsService.getwstester(msg, wsid);
    }

    createWebSocket(){
      let host = window.location.hostname;
      let port = window.location.port;
      // let port = 1234;
      let sock_url = "ws://"+host+":"+port;
      this.wsService.connect(sock_url).subscribe((data) =>{
        console.log("data: ", data.data)
      }, (err) => {
        console.log("error: ",err)
      })

    }
}
