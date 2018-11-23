import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestClientService extends HttpClient {

  public baseUri = environment.apiUrl;

  constructor(httpHandler: HttpHandler) {
    super(httpHandler);
  }

  getRestEntities<T>(uri: string, selector: string): Observable<T[]> {
    return super.get<any>(uri, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).pipe(
      map(response => response._embedded[selector] as T[])
    );
  }

  getRestEntity<T>(uri: string): Observable<T> {
    return super.get<T>(uri, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  postRestEntity<T>(uri: string, body: any): Observable<T> {
    return super.post<T>(uri, body,
      { headers: new HttpHeaders().set('Content-Type', 'application/json') }
    );
  }
}
