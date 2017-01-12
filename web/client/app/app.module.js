var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ConfigComponent } from './config/config.component';
import { FieldComponent } from './field/field.component';
import { LogComponent } from './log/log.component';
import { HelpComponent } from './help/help.component';
import { FocusOnInit } from './data/data.directive';
import { DataService } from './data/data.service';
import { LogService } from './data/log.service';
import { WebSocketService } from './log/socket.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        imports: [BrowserModule, FormsModule, HttpModule, AppRoutingModule],
        declarations: [AppComponent, DataComponent, ConfigComponent, FieldComponent, LogComponent, HelpComponent, FocusOnInit],
        providers: [DataService, LogService, WebSocketService],
        //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map