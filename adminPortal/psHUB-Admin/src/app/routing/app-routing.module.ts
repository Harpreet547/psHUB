import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../components/content/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dash', component: DashboardComponent },
  { path: 'features', loadChildren: '../features/features.module' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
