import { Component } from '@angular/core';
import { TransactionsService } from './service/transactions.service';
import { Transaction } from './interface/transaction';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [NgFor, RouterModule,],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {

  transactions : Transaction[] = [];

  constructor(
    private transactionService : TransactionsService
  ){}

  ngOnInit() :void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);

  }

}
