import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestClientService } from './rest-client.service';
import { TodoList } from '../models/todo-list.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private http: RestClientService) { }

  getTodoLists(): Observable<TodoList[]> {
    // TODO: Replace UserId
    return this.http.getRestEntities<TodoList>('/todoLists/search/findAllByCreator?creator=/api/v1/users/2', 'todoLists');
  }

}
