import { NgModule } from '@angular/core';

import { AuthComponent } from '@auth/components/auth.component';
import { LoginComponent } from '@auth/components/login/login.component';
import { AuthRoutingModule } from '@auth/auth-routing/auth-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  exports: [
    //AuthModule
  ],
  providers: [
    
  ]
  //bootstrap: [AuthComponent]
})
export class AuthModule { }
