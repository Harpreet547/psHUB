import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NetworkService } from './services/network/network.service';
import { AppConstantsService } from './services/appConstants/app-constants.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    AppConstantsService,
    NetworkService
  ],
  exports: [
    
  ]
})
export class CoreModule { }
