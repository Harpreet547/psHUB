import { Component, OnInit } from '@angular/core';
import { AppConstants } from '@utils/AppConstants';

@Component({
  selector: 'home-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  darkColor = AppConstants.appTheme.darkColor;
  secondaryFontColor = AppConstants.appTheme.secondaryTextColor;
  
  constructor() { }

  ngOnInit() {
  }

}
