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

  constructor() {
    this.userList = users;
  }

  ngOnInit(): void {
  }

}
