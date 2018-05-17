import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovie } from '../movie-model/iMovie';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnInit {
  movie: IMovie;
  movieTitle: string;
  errorMessage: string;
  @Output() imageClicked: EventEmitter<string> = new EventEmitter();

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
  }

  getMovie(title: string) {
    this.movieTitle = title;
    this._movieService.setTitle(this.movieTitle);
    this._movieService.getMovie().subscribe(response => {
      this.movie = response;
    }, error => this.errorMessage = <any>error);
  }

  onClick() {
    this.imageClicked.emit('The image ${this.movie.Poster} was clicked!');
  }

}
