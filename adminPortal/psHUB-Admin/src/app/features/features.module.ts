import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
import { AuthModule } from './modules/auth-module/auth.module';
import { FeaturesRoutingModule } from './features-routing/features-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    AuthModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  declarations: [FeaturesComponent],

})
export class FeaturesModule { }
