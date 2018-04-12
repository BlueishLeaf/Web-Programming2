import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { IResponse, IBook } from './book-model/ibook';

@Injectable()
export class BooksService {
  private _bookUrl: string;
  constructor(private _http: HttpClient) { }

  getBooks(): Observable<IResponse> {
    this._bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=subject:fantasy';
    return this._http.get<IResponse>(this._bookUrl).catch(this.handleError);
  }

  getBook(bookId: string): Observable<IResponse> {
    this._bookUrl = 'https://www.googleapis.com/books/v1/volumes?q=id:' + bookId;
    return this._http.get<IResponse>(this._bookUrl).catch(this.handleError);
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
