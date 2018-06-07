import { NgModule } from '@angular/core';
import { FeaturesComponent } from '@features/features.component';
import { AuthModule } from '@auth/auth.module';
import { FeaturesRoutingModule } from '@features/features-routing/features-routing.module';
import { SharedModule } from '@shared/shared.module';
import { DashModule } from '@dash/dash.module';
import { NavigationBarModule } from '@navBar/navigation-bar.module';

@NgModule({
  imports: [
    AuthModule,
    DashModule,
    NavigationBarModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  declarations: [FeaturesComponent],

})
export class FeaturesModule { }
