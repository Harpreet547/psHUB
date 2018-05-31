import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '@app/app.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'features', loadChildren: '@features/features.module#FeaturesModule' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
