import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouteInfo } from '../RouteInfo';
import { routes_names_topBar } from '../app-routing.module'
import { User } from 'src/utils/User';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  @Input()
  currentUser!: User;
  currentScreen?: string;
  
  navigationSubscription: Subscription;
  routesInfo: RouteInfo[];
  searchText: String;

  constructor(private router: Router) {
    
    this.routesInfo = routes_names_topBar;
    this.searchText = "";

    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) 
        this.updateScreenName();
    });

  }

  updateScreenName(): void {
    for (let i: number = 0; i < this.routesInfo.length; i++)
	  	if (this.router.url.replace("/", "").includes(this.routesInfo[i].routeLink))
			  this.currentScreen = this.routesInfo[i].routeName;
    
    this.searchText = "";
  }

  ngOnInit(): void {}

}
