import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../../../utils/AppConstants';
import { AuthConstantsService } from '../services/authConstants/auth-constants.service';

@Component({
  selector: 'content-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ AuthConstantsService ]
})
export class AuthComponent implements OnInit {

  secondaryTextColor = AppConstants.appTheme.secondaryTextColor;
  
  appTitle = '';
  authBackground = '../../../../assets/auth/authBackground.jpg';
  descLine1 = '';
  descLine2 = '';

  constructor(private authConstantsService: AuthConstantsService) { }

  ngOnInit() {
    this.loadAuthConstants();
  }

  loadAuthConstants() {
    this.authConstantsService.getAuthConstants(((authConstants, error, status) => {
      if(status) {
        this.appTitle = authConstants.appTitle;
        this.authBackground = authConstants.authBackground;
        this.descLine1 = authConstants.descLine1;
        this.descLine2 = authConstants.descLine2;
      }
    }));
  }

}
