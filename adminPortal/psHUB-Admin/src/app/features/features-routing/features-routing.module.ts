import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from '@features/features.component';

const routes: Routes = [
  { path: '', 
    component: FeaturesComponent, 
    //loadChildren: '@home/home.module#HomeModule'
    children: [
      { path: 'auth', loadChildren: '@auth/auth.module#AuthModule' },
      { path: 'home', loadChildren: '@home/home.module#HomeModule' }
    ]
  }
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
