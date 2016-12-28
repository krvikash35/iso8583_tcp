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
import { HelpComponent } from './help/help.component';
import { FocusOnInit } from './data/data.directive';
import { DataService } from './data/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, DataComponent, ConfigComponent, FieldComponent, LogComponent, HelpComponent, FocusOnInit ],
  providers:    [DataService],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
