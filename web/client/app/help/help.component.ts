import { Component } from '@angular/core'

@Component({
  selector: 'help',
  templateUrl: 'app/help/help.component.html',
  styleUrls: []
})
export class HelpComponent{

  goTo(anchor: string) {
    // TODO - HACK: remove click once https://github.com/angular/angular/issues/6595 is fixed
    (<HTMLScriptElement>document.querySelector('#'+ anchor)).scrollIntoView();
  }
}
