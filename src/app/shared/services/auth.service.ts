import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User;

  constructor(
    private apiService: ApiService,
    private http: RestClientService
  ) { }

  signIn(username: string, password: string): Observable<any> {

    return this.http.post(`${this.http.baseUri}/login`, {
      'username': username,
      'password': password
    }, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response'
    }).pipe(
      tap(response => {
        const jwt = response.headers.get('Authorization');
        this.setToken(jwt);
    }));
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isSignedIn(): boolean {
    return this.getToken() !== null;
  }

  getCurrentUser(): Observable<User> {
    if (this.isSignedIn()) {
      if (!this.currentUser) {
        return this.fetchUser();
      } else {
        return of(this.currentUser);
      }
    }
  }

  fetchUser(): Observable<User> {
    const decodedToken: any = this.decodeJWT(this.getToken());
    const url = this.apiService.apiInfo._links.users.href.split('{')[0] + '/' + decodedToken.jti;
    return this.http.getRestEntity<User>(url);
  }

  decodeJWT(token: string): Object {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }

}
