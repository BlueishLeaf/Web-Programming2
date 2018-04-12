import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook, IResponse } from '../book-model/ibook';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  response: IResponse;
  book: IBook;
  errorMessage: string;
  pageTitle: string = "Book Details";

  constructor(private _bookService: BooksService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    const param = this._route.snapshot.paramMap.get("id");
    if (param) {
      const id = param;
      this.getBook(id);
    }
  }

  getBook(id: string) {
    this._bookService.getBook(id).subscribe(response => {
      this.response = response,
      this.book = this.response.items[0]
    }, error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/books']);
  }
}
