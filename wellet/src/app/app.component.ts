import { Component } from '@angular/core';
import { users, currentStoredUser } from 'src/storage/UsersStorage';
import { User } from 'src/utils/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User; 

  constructor () {
    this.user = users[1]; 
  }

}
