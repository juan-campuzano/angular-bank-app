import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { UserProfile } from '../interface/user-profile';
import { ENDPOINT } from '../../core/constants';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

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

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${ENDPOINT}/users/profile`).pipe(
      catchError(this.handleError<UserProfile>('getTransactions', )))
  }
}
