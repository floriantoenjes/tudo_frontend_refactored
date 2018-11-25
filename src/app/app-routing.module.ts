import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListOverviewComponent } from './todo-list-overview/todo-list-overview.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'todo-lists', component: TodoListOverviewComponent },
  { path: 'todo-lists/:todoListId', component: TodoListComponent },
  { path: '', redirectTo: 'todo-lists', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
