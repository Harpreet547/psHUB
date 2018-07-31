import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-theme',
  templateUrl: './app-theme.component.html',
  styleUrls: ['./app-theme.component.css']
})
export class AppThemeComponent implements OnInit {

  arrayColors = ['#000000'];
  selectedColor = 0;

  constructor() { }

  ngOnInit() {
  }

}
