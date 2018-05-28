import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../components/content/auth/auth.component';
import { LoginComponent } from '../components/content/auth/login/login.component';

const routes: Routes = [
  { 
    path: 'auth', 
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ] 
  },
  
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
