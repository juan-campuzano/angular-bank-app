import { Component } from '@angular/core';
import { TransactionsService } from './service/transactions.service';
import { Transaction } from './interface/transaction';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    NgFor, 
    RouterModule,
    FormsModule,
  ],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  transactions : Transaction[] = [];

  filteredTransactions : Transaction[] = [];

  inputFilter? : string;

  constructor(
    private transactionService : TransactionsService
  ){}

  ngOnInit() : void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().pipe(
      map(transactions => {
        transactions.map(transaction => transaction.date = new Date(transaction.date).toLocaleString("es-CO"));

        return transactions;
      })
    ).subscribe(transactions => {
      this.transactions = transactions;
      this.filteredTransactions = transactions;
    });
  }

  filterByDescription() : void{
    this.filteredTransactions = this.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.inputFilter ?? ''));
  }

  filterAll() : void {
    this.filteredTransactions = this.transactions; 
  }

  filterByWithdrawals() : void {
    this.filteredTransactions = this.transactions.filter((transaction) => transaction.type == "Withdrawal");
  }

  filterByDeposits() : void {
    this.filteredTransactions = this.transactions.filter((transaction) => transaction.type == "Deposit");
  }

}
