import { NgModule } from '@angular/core';
import { FeaturesComponent } from '@features/features.component';
import { AuthModule } from '@auth/auth.module';
import { FeaturesRoutingModule } from '@features/features-routing/features-routing.module';
import { SharedModule } from '@shared/shared.module';
import { NavigationBarModule } from '@navBar/navigation-bar.module';
import { HomeModule } from '@home/home.module';
import { ActivitiesModule } from '@activities/activities.module';

@NgModule({
  imports: [
    AuthModule,
    HomeModule,
    ActivitiesModule,
    NavigationBarModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  declarations: [FeaturesComponent],

})
export class FeaturesModule { }
