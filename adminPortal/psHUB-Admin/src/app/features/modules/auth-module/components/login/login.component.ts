import { Component, OnInit } from '@angular/core';
import { AppConstants } from '@utils/AppConstants';
import { LoginService } from '@auth/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  secondaryColor = AppConstants.appTheme.secondaryColor;

  email = '';
  password = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.login();
  }
  
  onLoginBtnTapped() {
    console.log('login');
    this.login();
  }

  login() {
    this.loginService.login(this.email, this.password, (status, error) => {
      if(status) {
        this.router.navigateByUrl('/home/auth');
      }
    });
  }
}
