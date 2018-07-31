import { Injectable } from '@angular/core';
import { 
  HttpParams, 
  HttpClient, 
  HttpHeaders, 
  HttpErrorResponse, 
  HttpResponse, 
  HttpRequest,
  HttpEventType
} from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
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

  upload(url: string, formData: FormData, callback) {
    const req = new HttpRequest('POST', url, formData, {
      
    });
    this.http.request(req).subscribe(event => {
      if (event instanceof HttpResponse) {
        callback(event.body);
      }
    });

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
