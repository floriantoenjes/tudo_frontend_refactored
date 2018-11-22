import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: RestClientService) { }

  signIn(username: string, password: string): void {

    this.http.post(`${this.http.baseUri}/login`, {
      'username': username,
      'password': password
    }, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response'
    }).subscribe(response => {
      const jwt = response.headers.get('Authorization');
      this.setToken(jwt);
    });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

}
