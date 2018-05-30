import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  { path: 'auth', loadChildren: '../modules/auth-module/auth.module#AuthModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FeaturesRoutingModule { }
