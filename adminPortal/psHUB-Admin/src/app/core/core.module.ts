import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NetworkService } from '@core/services/network/network.service';
import { AppConstantsService } from '@core/services/appConstants/app-constants.service';

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
