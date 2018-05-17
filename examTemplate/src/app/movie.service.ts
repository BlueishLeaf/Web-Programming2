import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMovie } from './movie-model/iMovie';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MovieService {

  private _movieUrl: string;
  private _movieTitle: string;
  constructor(private _http: HttpClient) { }

  setTitle(title: string) {
    this._movieTitle = title;
  }

  getMovie(): Observable<IMovie> {
    this._movieUrl = 'http://www.omdbapi.com/?apikey=82cb5782&t=' + this._movieTitle;
    console.log(this._movieUrl);
    return this._http.get<IMovie>(this._movieUrl).catch(this.handleError);
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
