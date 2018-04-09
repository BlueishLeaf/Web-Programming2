import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book-model/ibook';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
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
    this._bookService.getBook(id).subscribe(book => this.book = book, error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/books']);
  }
}
