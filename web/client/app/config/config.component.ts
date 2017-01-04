import { Component, OnInit } from '@angular/core'

import { ConfigService } from './config.service'
import { LogService } from '../data/log.service'

@Component({
  selector: 'config',
  templateUrl: 'app/config/config.component.html',
  styleUrls: [],
  providers: [ConfigService]
})
export class ConfigComponent implements OnInit{
  prop = {};
  config = {};
  fdlist = [];
  constructor(private configService: ConfigService, private logService: LogService) { }
  ngOnInit(): void {
    this.config = this.configService.getConfigObj();
    this.prop = this.configService.getPropTemplte();
    this.fdlist = this.configService.getFieldDefList();
  }
}
