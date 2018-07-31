import { Injectable } from '@angular/core';
import { NetworkService } from '@core/services/network/network.service';
import { AppConstants } from '@utils/AppConstants';
import { IErrorCodes } from '@utils/ErrorCodes';
import { HttpParams } from '@angular/common/http';

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

interface ISaveAuthConstantsResponse {
  error: IErrorCodes,
  authConstants: IAuthConstants,
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

  saveAuthConstants(title: string, descLine1: string, descLine2: string, authBackground: string, callback: (status: boolean, error: IErrorCodes) => void) {
    var url = AppConstants.urls.baseServiceUrl + '/admin/authConstants/saveNewAuthConstants';
    var body: HttpParams = new HttpParams()
                                .set('appTitle', title)
                                .set('descLine1', descLine1)
                                .set('descLine2', descLine2)
                                .set('authBackground', authBackground);
    
    this.networkService.makePostRequest(url, body).subscribe((res: ISaveAuthConstantsResponse) => {
      if(res.status) {
        return callback(true, null);
      }else {
        return callback(false, res.error);
      }
    });


  }

}
