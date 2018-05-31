import { NgModule } from '@angular/core';
import { FeaturesComponent } from '@features/features.component';
import { AuthModule } from '@auth/auth.module';
import { FeaturesRoutingModule } from '@features/features-routing/features-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    AuthModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  declarations: [FeaturesComponent],

})
export class FeaturesModule { }
