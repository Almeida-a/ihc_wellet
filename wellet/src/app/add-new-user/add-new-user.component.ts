import { Component, Input, OnInit } from '@angular/core';
import { User, UserStatus } from 'src/utils/User';
import { users } from '../../storage/UsersStorage';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  userEmailTyped?: string;
  searchPerformed?: boolean;
  userFound?: User;

  constructor() {
  }

  ngOnInit(): void {
    this.searchPerformed = false;
  }

  searchUser() {
    
    this.userFound = undefined;

    users.forEach(user => {
      if (user.email === this.userEmailTyped) {
        this.userFound = user;
      } 
    });

    this.searchPerformed = true;

  }

  onUserInvited() {
    if (this.userFound)
      this.userFound.status = UserStatus.INVITED;
  }

}
