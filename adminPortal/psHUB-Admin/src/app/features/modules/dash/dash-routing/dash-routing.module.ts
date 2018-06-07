import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '@dash/components/dashboard.component';
import { HomeComponent } from '@dash/components/home/home.component';
import { ActivitiesComponent } from '@dash/components/activities/activities.component';
import { AuthComponent } from '@dash/components/home/auth/auth.component';

const routes: Routes = [
  {
    path: 'dash',
    component: DashboardComponent,
    children: [
      { 
        path: 'home', 
        component: HomeComponent,
        children: [
          { path: 'auth', component: AuthComponent }
        ]
      },
      { path: 'activities', component: ActivitiesComponent }
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
export class DashRoutingModule { }
