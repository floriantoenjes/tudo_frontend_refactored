import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from './rest-client.service';
import { TodoList } from '../models/todo-list.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(
    private authService: AuthService,
    private http: RestClientService
  ) { }

  getTodoLists(): Observable<TodoList[]> {
    return this.http.getRestEntities<TodoList>(
      `/todoLists/search/findAllByCreator?creator=/api/v1/users/${this.authService.getCurrentUser().id}`, 'todoLists'
    );
  }

  getTodoList(todoListId: string): Observable<TodoList> {
    return this.http.getRestEntity<TodoList>(`/todoLists/${todoListId}`);
  }

}
