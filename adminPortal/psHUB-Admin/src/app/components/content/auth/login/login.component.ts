import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../../../utils/AppConstants';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  primaryThemeColor = AppConstants.appTheme.primaryColor;

  constructor() { }

  ngOnInit() {
  }

}
