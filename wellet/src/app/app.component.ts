import { Component } from '@angular/core';
import { users } from 'src/storage/UsersStorage';
import { User } from 'src/utils/User';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: User; 
  singlePage?: boolean;

  constructor (private router: Router) {
    this.user = users[1];
  }

  ngOnInit(): void {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) 
        if (this.router.url.replace("/", "") === ('register' || 'login'))
          this.singlePage = true;
        else
          this.singlePage = false;
    });
  }

}
