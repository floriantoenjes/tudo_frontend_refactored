import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../shared/models/todo.model';
import { Observable } from 'rxjs';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todo$: Observable<Todo>;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const todoId = +params.get('todoId');
      this.todo$ = this.todoService.getTodo(todoId);
    });
  }

}
