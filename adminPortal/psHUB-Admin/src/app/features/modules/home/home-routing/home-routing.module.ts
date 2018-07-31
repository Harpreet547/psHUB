import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@home/components/home.component';
import { ActivitiesComponent } from '@activities/components/activities.component';
import { AuthComponent } from '@home/components/auth/auth.component';
import { AppThemeComponent } from '@home/components/app-theme/app-theme.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'auth', component: AuthComponent },
      { path: 'appTheme', component: AppThemeComponent }
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
export class HomeRoutingModule { }
