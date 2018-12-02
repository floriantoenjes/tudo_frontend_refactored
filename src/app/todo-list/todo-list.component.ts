import { Component, OnInit } from '@angular/core';
import { TodoList } from '../shared/models/todo-list.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../shared/services/todo-list.service';
import { Todo } from '../shared/models/todo.model';
import { TodoService } from '../shared/services/todo.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todoList$: Observable<TodoList>;

  public todos$: Observable<Todo[]>;

  constructor(
    private route: ActivatedRoute,
    private todoListService: TodoListService,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.todoList$ = this.todoListService.getTodoList(params.get('todoListId'))
        .pipe(tap(todolist => this.todos$ = this.todoService.getTodos(todolist.id)));
    });
  }

}
