import { Component, OnInit } from '@angular/core'
import { LogService } from '../data/log.service'
import { WebSocketService } from './socket.service'
import { Observable, Observer, Subject } from 'rxjs/Rx';

@Component({
  selector: 'log',
  templateUrl: 'app/log/log.component.html',
  styleUrls: [],
  providers: [WebSocketService]
})
export class LogComponent implements OnInit{

  private msgevt: Subject<MessageEvent>;
  constructor(private logService: LogService, private wsService: WebSocketService) { }

    ngOnInit(): void {

    }

    createWebSocket(){
      let host = location.hostname;
      let sock_url = "ws://"+host+"/websocket"
      this.msgevt = this.wsService.connect(sock_url);
      console.log(this.msgevt)
    }
}
