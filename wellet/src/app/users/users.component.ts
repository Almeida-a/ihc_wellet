import { Component, OnInit } from '@angular/core';
import { User } from 'src/utils/User';
import { users } from '../../storage/UsersStorage'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userList?: User[];
  userToInspect?: User;

  constructor() {
    this.userList = users;
  }

  ngOnInit(): void {
    console.log(this.userList);
  }

  userViewClick(user: User) : void {
    this.userToInspect = user;
  }

}
