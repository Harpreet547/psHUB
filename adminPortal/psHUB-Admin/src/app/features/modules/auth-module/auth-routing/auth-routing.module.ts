import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../components/auth.component';
import { LoginComponent } from '../components/login/login.component';

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
