import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, catchError, lastValueFrom, of, tap } from 'rxjs';
import { AccessToken } from '../../core/access-token';
import { IsLoggedIn } from '../is-logged-in';
import { ENDPOINT } from '../../core/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient,
  ) { }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  async isLoggedIn(): Promise<boolean> {

    try {
      const response = await lastValueFrom(this.http.get<IsLoggedIn>(`${ENDPOINT}/check-signin`));

      return response.loggedIn;
    } catch (error) {
      return false
    }
  }

  login(payload: User): Observable<AccessToken> {
    return this.http.post<AccessToken>(`${ENDPOINT}/signin`, payload)
      .pipe(
        catchError(this.handleError<AccessToken>('login'))
      );
  }
}