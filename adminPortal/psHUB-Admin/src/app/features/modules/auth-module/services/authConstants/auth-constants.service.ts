import { Injectable } from '@angular/core';
import { NetworkService } from '@core/services/network/network.service';
import { AppConstants } from '@utils/AppConstants';
import { IErrorCodes } from '@utils/ErrorCodes';

interface IAuthConstants {
  appTitle: string,
  authBackground: string,
  descLine1: string,
  descLine2: string
}

interface IAuthConstantResponse {
  authConstants: IAuthConstants,
  error: IErrorCodes,
  status: boolean
}

@Injectable()
export class AuthConstantsService {

  constructor(private networkService: NetworkService) { }

  getAuthConstants(callback: (authConstants: IAuthConstants, error: IErrorCodes, status: boolean) => void) {
    const url = AppConstants.urls.baseServiceUrl + '/admin/authConstants/getLatestAuthConstants';
    this.networkService.makeGetRequest(url).subscribe( (res: IAuthConstantResponse) => {
      if(res.status) {
        callback(res.authConstants, res.error, res.status);
      }
    });
  }
  
}
