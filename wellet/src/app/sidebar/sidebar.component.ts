// import { UserProfileComponent } from './../user-profile/user-profile.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  visible!: boolean

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });

    this.visible = true;
    // this.observer.observe(['(max-height: 890px)']).subscribe((res) => {
    //   if (res.matches)
    //     this.visible = false;
    //   else 
    //     this.visible = true;
    // });
  }
}