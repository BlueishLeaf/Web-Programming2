import { Component, OnInit } from '@angular/core';
import { IBook, IResponse } from '../book-model/ibook';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: IBook[];
  response: IResponse;
  errorMessage: string;

  constructor(private _bookService: BooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this._bookService.getBooks().subscribe(response => {
      this.response = response;
      this.books = this.response.items;
    }, error => this.errorMessage = <any>error)
  }

}
