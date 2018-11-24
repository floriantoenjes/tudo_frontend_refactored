import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from './rest-client.service';
import { TodoList } from '../models/todo-list.model';
import { AuthService } from './auth.service';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(
    private authService: AuthService,
    private http: RestClientService
  ) { }

  getTodoLists(): Observable<TodoList[]> {
    return this.authService.getCurrentUser().pipe(mergeMap(user => {
      return this.http.getRestEntities<TodoList>(user._links.todoLists.href, 'todoLists');
    }));
  }

  getTodoList(uri: string): Observable<TodoList> {
    return this.http.getRestEntity<TodoList>(uri);
  }



}
