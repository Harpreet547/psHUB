import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '@navBar/components/navigation-bar/navigation-bar.component';
import { SharedModule } from '@shared/shared.module';

import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    SharedModule,
    BsDropdownModule.forRoot()
  ],
  exports: [
    NavigationBarComponent
  ],
  declarations: [NavigationBarComponent]
})
export class NavigationBarModule { }
