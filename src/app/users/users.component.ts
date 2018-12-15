import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

}
