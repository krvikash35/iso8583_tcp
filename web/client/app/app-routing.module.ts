import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataComponent }   from './data/data.component';
import { ConfigComponent } from './config/config.component';
import { FieldComponent } from './field/field.component';
import { LogComponent } from './log/log.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/app/data', pathMatch: 'full' },
  { path: 'app/data',  component: DataComponent },
  { path: 'app/config',  component: ConfigComponent },
  { path: 'app/field',  component: FieldComponent },
  { path: 'app/log',  component: LogComponent },
  { path: 'app/help',  component: HelpComponent },
  { path: '**', redirectTo: '/app/data', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
