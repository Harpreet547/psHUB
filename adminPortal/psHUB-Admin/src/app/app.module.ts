import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@core/core.module';//'./core/core.module';
import { AppComponent } from '@app/app.component';
import { NavigationBarComponent } from '@app/components/navigation-bar/navigation-bar.component';
import { AppRoutingModule } from '@app/routing/app-routing.module';

import { FeaturesModule } from '@features/features.module';

import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CoreModule,    
    FeaturesModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
