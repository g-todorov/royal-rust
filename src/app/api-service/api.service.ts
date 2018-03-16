import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message-service.service';

@Injectable()
export class ApiService {

  private apiUrl = 'api/';
  // private shoppingItemsUrl = 'api/shoppingItems';
  // private shoppingItemsUrl = 'http://127.0.0.1/data.php';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpGetRequest(dataUrl): Observable<any> {
    const requestUrl = this.apiUrl + dataUrl;

    return this.http.get<any>(requestUrl)
      .pipe(
        tap(items => this.log(`fetched data`)),
        catchError(this.handleError('getItems', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
