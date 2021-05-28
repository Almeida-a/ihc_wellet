import { Component, OnInit } from '@angular/core';
import { MOCK_HISTORY } from './mock-history-items';
import { HistItem } from './receipt';

@Component({
  selector: 'app-history-items',
  templateUrl: './history-items.component.html',
  styleUrls: ['./history-items.component.css']
})
export class HistoryItemsComponent implements OnInit {

  items!: HistItem[]

  constructor() { }

  ngOnInit(): void {
    this.items = MOCK_HISTORY
  }

}
