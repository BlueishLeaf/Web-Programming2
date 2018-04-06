import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { IResponse } from './book-model/ibook';

@Injectable()
export class BooksService {
  private _bookUrl: string;
  constructor(private _http: HttpClient) { }

  getBooks(): Observable<IResponse> {
    this._bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=subject:fantasy';
    console.log("test");
    return this._http.get<IResponse>(this._bookUrl).do(data => console.log('All: ' + JSON.stringify(data.items))).catch(this.handleError);
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
