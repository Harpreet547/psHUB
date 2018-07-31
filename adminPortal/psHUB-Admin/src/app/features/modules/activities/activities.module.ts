import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ActivitiesComponent } from '@activities/components/activities.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ActivitiesComponent
  ]
})
export class ActivitiesModule { }
