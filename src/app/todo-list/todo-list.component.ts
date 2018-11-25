import { Component, OnInit } from '@angular/core';
import { TodoList } from '../shared/models/todo-list.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../shared/services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todoList$: Observable<TodoList>;

  constructor(
    private route: ActivatedRoute,
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.todoList$ = this.todoListService.getTodoList(params.get('todoListId'));
    });
  }

}
