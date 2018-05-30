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

  makePostRequest(url: string, body: HttpParams): Observable<Object> {
    return this.http.post(
      url,
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Accept', 'application/json'),
        withCredentials: true
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  makeGetRequest(url: string): Observable<Object> {
    return this.http.get(
      url,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Accept', 'application/json'),
        withCredentials: true
      }
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError('Error while communicating to server');
  }
}
