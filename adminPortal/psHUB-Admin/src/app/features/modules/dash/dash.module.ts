import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from '@dash/components/dashboard.component';
import { DashRoutingModule } from '@dash/dash-routing/dash-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarModule } from '@navBar/navigation-bar.module';
import { ActivitiesComponent } from './components/activities/activities.component';
import { SideBarComponent } from './components/home/side-bar/side-bar.component';
import { AuthComponent } from './components/home/auth/auth.component';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    SharedModule,
    DashRoutingModule,
    NavigationBarModule,
    ModalModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    ActivitiesComponent,
    SideBarComponent,
    AuthComponent
  ]
})
export class DashModule { }
