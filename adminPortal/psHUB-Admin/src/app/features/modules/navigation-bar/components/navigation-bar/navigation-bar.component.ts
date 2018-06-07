import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConstants } from '@utils/AppConstants';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  logo = '../../../../../../assets/main/logo.png';
  profilePic = '../../../../../../assets/main/logo.png';
  primaryColor = AppConstants.appTheme.primaryColor;
  secondaryColor = AppConstants.appTheme.secondaryColor;
  secondaryFontColor = AppConstants.appTheme.secondaryTextColor;

  homeActive = true;
  activityActive = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Navigation Bar');
  }

  homeTapped() {
    //this.activeTab = ActiveTab.home;
    this.homeActive = true;
    this.activityActive = false;
    this.router.navigateByUrl('/dash/home');
  }

  activityTapped() {
    this.activityActive = true;
    this.homeActive = false;
    this.router.navigateByUrl('/dash/activities');
  }

}
