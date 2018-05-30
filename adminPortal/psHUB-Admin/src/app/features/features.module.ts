import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { AuthModule } from './modules/auth-module/auth.module';
import { FeaturesRoutingModule } from './features-routing/features-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    FeaturesRoutingModule
  ],
  declarations: [FeaturesComponent],

})
export class FeaturesModule { }
