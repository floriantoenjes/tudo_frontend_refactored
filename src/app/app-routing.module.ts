import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListOverviewComponent } from './todo-list-overview/todo-list-overview.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: TodoListOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
