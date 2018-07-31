import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UploadModule } from '@upload/upload.module';
import { HomeComponent } from '@home/components/home.component';
import { SideBarComponent } from '@home/components/side-bar/side-bar.component';
import { AuthComponent } from '@home/components/auth/auth.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeRoutingModule } from '@home/home-routing/home-routing.module';
import { NavigationBarModule } from '@navBar/navigation-bar.module';
import { AppThemeComponent } from './components/app-theme/app-theme.component';

import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  imports: [
    SharedModule,
    UploadModule,
    ModalModule.forRoot(),
    HomeRoutingModule,
    NavigationBarModule,
    ColorPickerModule
  ],
  declarations: [
    HomeComponent,
    SideBarComponent,
    AuthComponent,
    AppThemeComponent
  ]
})
export class HomeModule { }
