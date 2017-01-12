import { Component } from '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'help',
  // templateUrl: 'app/help/help.component.html',
  templateUrl: 'help.component.html',
  styleUrls: []
})
export class HelpComponent{

  goTo(anchor: string) {
    // TODO - HACK: remove click once https://github.com/angular/angular/issues/6595 is fixed
    (<HTMLScriptElement>document.querySelector('#'+ anchor)).scrollIntoView();
  }
}
