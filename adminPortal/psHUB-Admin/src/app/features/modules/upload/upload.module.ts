import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UploadImageComponent } from './components/upload-image/upload-image.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [UploadImageComponent],
  exports: [
    UploadImageComponent
  ]
})
export class UploadModule { }
