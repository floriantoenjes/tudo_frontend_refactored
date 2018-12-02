import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';
import { Todo } from '../models/todo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: RestClientService
  ) { }

  getTodos(todoListId: number): Observable<Todo[]> {
    return this.http.getRestEntities<Todo>(`/todoLists/${todoListId}/todos`, 'todos');
  }

  getTodo(todoId: number): Observable<Todo> {
    return this.http.getRestEntity<Todo>(`/todos/${todoId}`);
  }
}
