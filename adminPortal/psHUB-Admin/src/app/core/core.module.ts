import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkService } from './services/network/network.service';
import { AppConstantsService } from './services/appConstants/app-constants.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AppConstantsService,
    NetworkService
  ]
})
export class CoreModule { }
