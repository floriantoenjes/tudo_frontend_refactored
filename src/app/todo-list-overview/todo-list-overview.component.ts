import { Component, OnInit } from '@angular/core';
import { TodoList } from '../shared/models/todo-list.model';
import { Observable } from 'rxjs';
import { TodoListService } from '../shared/services/todo-list.service';

@Component({
  selector: 'app-todo-list-overview',
  templateUrl: './todo-list-overview.component.html',
  styleUrls: ['./todo-list-overview.component.scss']
})
export class TodoListOverviewComponent implements OnInit {

  public todoLists$: Observable<TodoList[]>;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoLists$ = this.todoListService.getTodoLists();
  }

}
