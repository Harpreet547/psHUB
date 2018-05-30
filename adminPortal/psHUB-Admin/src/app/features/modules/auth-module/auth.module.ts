import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './components/auth.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule
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
