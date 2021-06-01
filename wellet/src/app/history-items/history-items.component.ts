import { Component, OnInit } from '@angular/core';
import { MOCK_HISTORY } from './mock-history-items';
import { HistItem } from './receipt';
import { expenses } from '../../storage/ExpensesStorage'
import { incomes } from '../../storage/IncomesStorage'
import { Transaction } from 'src/utils/Transaction';

@Component({
  selector: 'app-history-items',
  templateUrl: './history-items.component.html',
  styleUrls: ['./history-items.component.css']
})
export class HistoryItemsComponent implements OnInit {

  allTransactions!: Transaction[]

  constructor() { }

  ngOnInit(): void {
    this.allTransactions = expenses;
    this.allTransactions = this.allTransactions.concat(incomes);
  }

}
