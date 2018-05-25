import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ContentComponent } from './components/content/content.component';
import { AuthComponent } from './components/content/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ContentComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
