import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ITVShowDetails } from './api-response';

@Injectable()
export class OmdbApiService {

  private _tvUrl: string;
  constructor(private _http: HttpClient) { }

  getTVShowData(tvShowName: string): Observable<ITVShowDetails> {
    this._tvUrl = 'http://www.omdbapi.com/?apikey=82cb5782&t=' + tvShowName;
    return this._http.get<ITVShowDetails>(this._tvUrl).catch(this.handleError);
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
