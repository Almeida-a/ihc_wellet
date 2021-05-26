import { Component, OnInit } from '@angular/core';
import { MENU } from './menu';
import { MenuItem } from './menu_item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: MenuItem[];
  selectedItem: MenuItem;

  constructor() {
    this.menuItems = MENU;
    this.selectedItem = this.menuItems[0];
  }

  ngOnInit(): void {
  }

  onMenuItemClick(menuItem: MenuItem): void {
    this.selectedItem = menuItem;
  }

}