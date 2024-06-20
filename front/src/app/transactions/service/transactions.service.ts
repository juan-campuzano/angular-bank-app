import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Transaction } from '../interface/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private endpoint = 'http://localhost:3000';

  constructor(
    private http: HttpClient,
  ) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getTransactions(): Observable<Transaction[]> {

    return this.http.get<Transaction[]>(`${this.endpoint}/transactions`)
      .pipe(
        catchError(this.handleError<Transaction[]>('getTransactions', []))
      );
  }
}
