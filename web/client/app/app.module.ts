import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { DataComponent } from './data/data.component';
import { ConfigComponent } from './config/config.component';
import { FieldComponent } from './field/field.component';
import { LogComponent } from './log/log.component';
import { UtilityComponent } from './utility/utility.component';
import { HelpComponent } from './help/help.component';
import { FocusOnInit } from './data/data.directive';
import { DataService } from './data/data.service';
import { LogService } from './data/log.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, DataComponent, ConfigComponent, FieldComponent, LogComponent, UtilityComponent, HelpComponent, FocusOnInit ],
  providers:    [DataService, LogService],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
