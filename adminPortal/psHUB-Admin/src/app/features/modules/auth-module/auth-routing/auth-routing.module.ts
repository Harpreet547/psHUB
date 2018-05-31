import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '@auth/components/auth.component';
import { LoginComponent } from '@auth/components/login/login.component';

const routes: Routes = [
  { 
    path: 'auth', 
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent }
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
export class AuthRoutingModule { }
