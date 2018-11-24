import { Component, OnInit } from '@angular/core';
import { RestClientService } from '../shared/services/rest-client.service';
import { TodoList } from '../shared/models/todo-list.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todoList$: Observable<TodoList>;

  constructor(
    private http: RestClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

}
