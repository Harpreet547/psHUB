import { Injectable } from '@angular/core';
import { 
  HttpParams, 
  HttpClient, 
  HttpHeaders, 
  HttpErrorResponse, 
  HttpResponse 
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) { }

  makePostRequest(url, body: HttpParams) {
    return this.http.post(
      url,
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Error');
  }
}
