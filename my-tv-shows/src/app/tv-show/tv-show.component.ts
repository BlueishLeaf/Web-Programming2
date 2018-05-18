import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITVShowDetails } from '../api-response';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  @Input() tvShowDetails: ITVShowDetails;
  @Output() removeTvShow: EventEmitter<ITVShowDetails> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemove(){
    this.removeTvShow.emit(this.tvShowDetails);
  }

  addReview(myReview: string) {
    this.tvShowDetails.MyReview = myReview;
  }

}
