import { Injectable } from '@angular/core';
import { Observable, Observer,  Subject }  from 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class WebSocketService {
	private subject: Subject<MessageEvent>;

  constructor(private http: Http) {

  }

  getwstester(name, wsid){
    let params: URLSearchParams = new URLSearchParams();
    params.set('name', name);
    params.set('wsid', wsid);
    return this.http.get('service/wstester', {search: params})
        .subscribe((res)=>{
          console.log(res)
        }, (err)=>{
          console.log(err)
        })
  }

	public connect(url): Subject<MessageEvent> {
		if (!this.subject) {
			this.subject = this.create(url);
		}
		return JSON.parse(this.subject);
	}

  public close(){
    if(this.subject){
        this.subject.complete();
    }else{
      console.log("WebSocketService.close...connection already closed!")
    }
    this.subject = null;
  }

  public send(msg){
    if(this.subject){
        this.subject.next(msg)
    }else{
      console.log("WebSocketService.send...connection is closed, so can not send!")
    }

  }

	private create(url): Subject<MessageEvent> {
		let ws = new WebSocket(url);

		let observable = Observable.create(
			(obs: Observer<MessageEvent>) => {
				ws.onmessage = obs.next.bind(obs);
				ws.onerror = obs.error.bind(obs);
				ws.onclose = obs.complete.bind(obs);

				return ws.close.bind(ws);
			})

		let observer = {
			next: (data: Object) => {
				if (ws.readyState === WebSocket.OPEN) {
          console.log("WebSocketService.create.observer.next..., readyState, will send msg")
					ws.send(JSON.stringify(data));
				}else{
          console.log("WebSocketService.create.observer.next..., not in readyState, will not send msg")
        }
			},
      complete: () => {
        if (ws.readyState === WebSocket.OPEN) {
          console.log("WebSocketService.create.observer.complete..., readyState, will close connection")
					ws.close();
				}else{
          console.log("WebSocketService.create.observer.complete..., not in readyState, will not close connection")
        }
      }
		}

		return Subject.create(observer, observable);
	}
} // end class WebSocketService
