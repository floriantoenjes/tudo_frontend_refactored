import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestClientService extends HttpClient {

  constructor(httpHandler: HttpHandler) {
    super(httpHandler);
  }

  getRestEntities<T>(url: string, selector: string): Observable<T[]> {
    return super.get<any>(`${environment.apiUrl}${url}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(
      map(response => response._embedded[selector] as T[])
    );
  }

  getRestEntity<T>(url: string): Observable<T> {
    return super.get<T>(`${environment.apiUrl}${url}`, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

}
