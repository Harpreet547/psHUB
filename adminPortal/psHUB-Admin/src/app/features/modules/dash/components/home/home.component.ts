import { Component, OnInit } from '@angular/core';
import { AppConstants } from '@utils/AppConstants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  darkColor = AppConstants.appTheme.darkColor;
  
  constructor() { }

  ngOnInit() {
  }

}
