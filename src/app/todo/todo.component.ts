import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../shared/models/todo.model';
import { Observable } from 'rxjs';
import { TodoService } from '../shared/services/todo.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todoForm: FormGroup;

  public todo$: Observable<Todo>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const todoId = +params.get('todoId');
      this.todo$ = this.todoService.getTodo(todoId);
      this.todoForm = this.createForm();
      this.todo$.pipe(take(1)).subscribe(todo =>
        this.todoForm.patchValue(todo));
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: [''],
      description: [''],
      dueDate: [''],
      tags: [''],
      priority: [''],
      assignedUsers: [''],
      progress: [''],
      completed: ['']
    });
  }
}
