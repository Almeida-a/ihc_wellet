import { ACTIONS } from '../history/mock-actions';
import { Action } from '../history/action';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  screenWidth: any;
  nElements: Number;

  lastActions: Action[];
  constructor(private observer: BreakpointObserver) {
    this.lastActions = ACTIONS;
    this.nElements = 5;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 1399px)']).subscribe((res) => {
      if (res.matches)
        this.nElements = 2
      else
        this.nElements = 5
    });
  }
}
