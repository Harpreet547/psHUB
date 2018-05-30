import { Injectable } from '@angular/core';
import { NetworkService } from '../../../../../core/services/network/network.service';
import { AppConstants } from '../../../../../utils/AppConstants';
import { HttpParams } from '@angular/common/http';
import { IErrorCodes } from '../../../../../utils/ErrorCodes';
import { AppConstantsService } from '../../../../../core/services/appConstants/app-constants.service';
import { AuthModule } from '../../auth.module';

interface ILoginResponse {
  error: IErrorCodes,
  sessionToken: string,
  status: boolean     
}


@Injectable()
export class LoginService {

  constructor(
    private networkService: NetworkService,
    private appConstantsService: AppConstantsService
  ) { }

  login(email: string, password: string, callback: (status: boolean, error: IErrorCodes) => void) {
    const url = AppConstants.urls.baseServiceUrl + '/admin/auth/login';
    const body = new HttpParams()
                  .set('email', email)
                  .set('password', password);

    this.networkService.makePostRequest(url, body).subscribe((res: ILoginResponse)  => {
      if(res.status || res.error.errorCode === 303) {
        this.appConstantsService.sessionToken = res.sessionToken;
      }
      console.log(res);
      callback(res.status || res.error.errorCode === 303, res.error);
    });
  }
}
