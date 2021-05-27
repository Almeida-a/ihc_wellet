import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MENU } from '../sidebar/menu';
import { MenuItem } from '../sidebar/menu_item';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input()
  currentUser!: string;
  currentScreen?: string;
  
  navigationSubscription: Subscription;
  menuItems: MenuItem[];

  constructor(private router: Router) {
    
    this.menuItems = MENU;

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) 
        this.updateScreenName();
    });

  }

  updateScreenName(): void {
    for (let i: number = 0; i < this.menuItems.length; i++)
	  	if (this.menuItems[i].route === this.router.url.replace("/", ""))
			  this.currentScreen = this.menuItems[i].name;
  }


  ngOnInit(): void {
  }

}
