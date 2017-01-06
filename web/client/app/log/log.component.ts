import { Component, OnInit } from '@angular/core'
import { LogService } from '../data/log.service'
import { WebSocketService } from './socket.service'

@Component({
  selector: 'log',
  templateUrl: 'app/log/log.component.html',
  styleUrls: [],
  providers: [WebSocketService]
})
export class LogComponent implements OnInit{

  constructor(private logService: LogService, private wsService: WebSocketService) { }

    ngOnInit(): void {

    }

    createWebSocket(){
      let host = location.hostname;
      let sock_url = "ws://"+host+"/websocket"
      this.wsService.connect(sock_url);
    }
}
