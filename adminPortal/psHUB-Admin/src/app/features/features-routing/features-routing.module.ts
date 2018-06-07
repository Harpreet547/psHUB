import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: '@auth/auth.module#AuthModule' },
  { path: 'dash', loadChildren: '@dash/dash.module#DashModule' }
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
