import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataComponent }   from './data/data.component';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: 'data',  component: DataComponent },
  { path: 'config',  component: ConfigComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
