import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListOverviewComponent } from './todo-list-overview/todo-list-overview.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { SignedInGuard } from './shared/guards/signed-in.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },

  { path: 'todo-lists', component: TodoListOverviewComponent, canActivate: [SignedInGuard] },
  { path: 'todo-lists/:todoListId', component: TodoListComponent, canActivate: [SignedInGuard] },
  { path: 'todo-lists/:todoListId/todos/:todoId', component: TodoComponent, canActivate: [SignedInGuard] },

  { path: 'users', component: UsersComponent, canActivate: [SignedInGuard] },

  { path: '', redirectTo: 'todo-lists', pathMatch: 'full', canActivate: [SignedInGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
