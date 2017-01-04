import { Component } from '@angular/core'
import { PROP } from './config.templete'

@Component({
  selector: 'config',
  templateUrl: 'app/config/config.component.html',
  styleUrls: []
})
export class ConfigComponent{
  prop = PROP;
}
