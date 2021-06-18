import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MENU } from './menu';
import { MenuItem } from './menu_item';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/utils/User';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  currentUser!: User;
  menuItems: MenuItem[];
  selectedItem: MenuItem;
  navigationSubscription: Subscription;

  constructor(private router: Router) {

	this.menuItems = MENU;
	this.selectedItem = this.menuItems[0];

	this.navigationSubscription = this.router.events.subscribe((e: any) => {
		if (e instanceof NavigationEnd) 
			this.updateMenuItem();
	});

  }
  
  updateMenuItem(): void { 
	for (let i: number = 0; i < this.menuItems.length; i++)
	  	if (this.menuItems[i].route === this.router.url.replace("/", ""))
			this.selectedItem = this.menuItems[i];
  }

  ngOnInit(): void {}

  onMenuItemClick(menuItem: MenuItem): void {
	this.selectedItem = menuItem;
  }

}