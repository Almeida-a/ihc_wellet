import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/utils/Transaction';
import { expenses } from "src/storage/ExpensesStorage";
import { incomes } from "src/storage/IncomesStorage";
import { currentStoredUser, users } from 'src/storage/UsersStorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-transaction',
  templateUrl: './add-new-transaction.component.html',
  styleUrls: ['./add-new-transaction.component.css']
})
export class AddNewTransactionComponent implements OnInit {

  currentTransaction!: Transaction;
  transactionAdded: boolean;

  constructor(private router: Router) {
    this.transactionAdded = false;
  }

  ngOnInit(): void {
    this.currentTransaction = new Transaction(TransactionVisibility.VISIBLE, TransactionType.EXPENSE, users[1]);
    this.transactionAdded = false;
  }

  onTypeChange(radioValue?: string): void {
    switch (radioValue) {
      case "Expense":
        this.currentTransaction.type = TransactionType.EXPENSE;
        break;
      
      case "Income":
        this.currentTransaction.type = TransactionType.INCOME;
        break;
    }
  }

  onVisibilityChange(radioValue?: string) {
    switch (radioValue) {
      case "Visible":
        this.currentTransaction.visibility = TransactionVisibility.VISIBLE;
        break;

      case "Hidden":
        this.currentTransaction.visibility = TransactionVisibility.HIDDEN;
        break;
    }
  }

  onSubmit(): void {
    this.currentTransaction.save();
    this.transactionAdded = true;
  }

  onNewTransaction(): void {
    this.ngOnInit();
  }

}

enum TransactionType {
  EXPENSE = "Expense",
  INCOME = "Income"
}

enum TransactionVisibility {
  VISIBLE = "Visible",
  HIDDEN = "Hidden"
}