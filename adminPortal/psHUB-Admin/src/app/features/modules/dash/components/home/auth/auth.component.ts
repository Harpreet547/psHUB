import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthConstantsService } from '@dash/services/authConstants/auth-constants.service';
import { AppConstants } from '@utils/AppConstants';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ AuthConstantsService ]
})
export class AuthComponent implements OnInit {

  authBackground = '../../../../../../../assets/auth/authBackground.jpg';
  title = 'PS-HUB';
  descLine1 = '';
  descLine2 = '';

  modalRef: BsModalRef;

  primaryColor = AppConstants.appTheme.primaryColor;
  secondaryColor = AppConstants.appTheme.secondaryColor;
  secondaryTextColor = AppConstants.appTheme.secondaryTextColor;

  constructor(private authConstantsService: AuthConstantsService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAuthConstants();
  }

  getAuthConstants() {
    this.authConstantsService.getAuthConstants((authConstants, error, status) => {
      if(status) {
        console.log(authConstants);
        this.title = authConstants.appTitle;
        this.descLine1 = authConstants.descLine1;
        this.descLine2 = authConstants.descLine2;
        this.authBackground = authConstants.authBackground;
      }
    })
  }

  saveAuthConstants() {
    this.authConstantsService.saveAuthConstants(this.title, this.descLine1, this.descLine2, this.authBackground, (status, error) => {
      this.modalRef.hide();
      if(!status) {
      }
    });
  }

  openSaveModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
