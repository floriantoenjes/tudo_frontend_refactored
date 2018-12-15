import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: RestClientService
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.getRestEntities<User>('/users', 'users');
  }
}
