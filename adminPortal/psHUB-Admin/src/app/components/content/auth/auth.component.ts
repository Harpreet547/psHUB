import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../../utils/AppConstants';

@Component({
  selector: 'content-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  secondaryTextColor = AppConstants.appTheme.secondaryTextColor;
  
  constructor() { }

  ngOnInit() {
  }

}
