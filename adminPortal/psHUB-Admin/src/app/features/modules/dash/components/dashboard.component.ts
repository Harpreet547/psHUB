import { Component, OnInit } from '@angular/core';
import { AppConstantsService } from '../../../../core/services/appConstants/app-constants.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appConstantsService: AppConstantsService) { }

  ngOnInit() {
    console.log('DASHBOARD');
  }

  printToken() {
    console.log(this.appConstantsService.sessionToken);
  }
}
