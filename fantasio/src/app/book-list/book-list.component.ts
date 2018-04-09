import { Component, OnInit } from '@angular/core';
import { IBook, IResponse } from '../book-model/ibook';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  response: IResponse;
  errorMessage: string;
  filteredBooks: IBook[];
  books: IBook[];
  coversEnabled: boolean = true;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    if(this.listFilter){
      this.filteredBooks= this.filterBooks(this.listFilter);
    }
    else{
      this.filteredBooks = this.books;
    }
  }


  constructor(private _bookService: BooksService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(): void {
    this._bookService.getBooks().subscribe(response => {
      this.response = response;
      this.books = this.response.items;
      this.filteredBooks = this.books;
    }, error => this.errorMessage = <any>error);
  }

  filterBooks(searchTerm: string): IBook[] {
    searchTerm = searchTerm.toLowerCase();
    return this.books.filter((book: IBook) => book.volumeInfo.title.toLowerCase().indexOf(searchTerm) !== -1);
  }

  toggleCovers() {
    if(this.coversEnabled){
      this.coversEnabled=false;
    }
    else{
      this.coversEnabled=true;
    }
  }

}
