import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.css']
})
export class PageNavigationComponent implements OnInit {

  currentPage !: number;
  totalPages !: number;

  constructor() { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.totalPages = 10;
  }

}
