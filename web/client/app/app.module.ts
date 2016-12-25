import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { DataComponent } from './data/data.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule ],
  declarations: [ AppComponent, DataComponent, ConfigComponent ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
