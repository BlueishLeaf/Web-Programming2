import { Component, OnInit } from '@angular/core';
import { OmdbApiService } from '../omdb-api.service';
import { ITVShowDetails } from '../api-response';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {
  tvShowData: ITVShowDetails;
  tvShows: ITVShowDetails[];
  posterHeight: number = 200;
  errorMessage: string;

  constructor(private _tvShowService: OmdbApiService) {
    this.tvShows = new Array();
   }

  ngOnInit() {
  }

  getTvShowDetails(tvShowName: string) {
    this._tvShowService.getTVShowData(tvShowName).subscribe(response => {
      this.tvShowData = response;
    }, error => this.errorMessage = <any>error);
  }

  addToFavourites() {
    this.tvShows.push(this.tvShowData);
  }

  removeFromFavourites($event: ITVShowDetails) {
    this.tvShows.splice(this.tvShows.indexOf($event));
  }

  cancel() {
    this.tvShowData = null;
  }

}
