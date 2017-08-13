import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from '../services/book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-observable',
  templateUrl: './book-observable.component.html',
  styleUrls: ['./book-observable.component.css']
})

export class BookObservableComponent implements OnInit {

  observableBooks: Observable<Book[]>
  books: Book[];
  book = new Book();
  bookName: string;
  errorMessage: String;


  constructor(private bookService: BookService) { }
  // ngOnInit(): void {
  //   this.observableBooks = this.bookService.getBooksWithObservable();
  //   this.observableBooks.subscribe(
  //     books => this.books = books,
  //     error => this.errorMessage = <any>error);
  // }

  ngOnInit(): void {
    this.fetchBooks();
  }


  /**
   * 
   * Read all book information
   * @return void
   */
  fetchBooks(): void {
    // this.bookService.getBooksWithObservable()
    //   .subscribe(books => this.books = books,
    //   error => this.errorMessage = <any>error);
    this.observableBooks = this.bookService.getBooksWithObservable();
    this.observableBooks.subscribe(
      books => this.books = books,
      error => this.errorMessage = <any>error);
  }

/**
 * 
 * Add Book information
 * @return void
 */
  addBook(): void {
    this.bookService.addBookWithObservable(this.book)
      .subscribe(book => {
        this.fetchBooks();
        this.reset();
        this.bookName = book.name;
      },
      error => this.errorMessage = <any>error);
  }


  /**
   * 
   * Clear form control 
   * @return void
   */
  private reset() {
    //Clear form with clear data maping to the data binding
    this.book.id = null;
    this.book.name = null;
    this.book.category = null;
    this.book.writer = null;

    this.errorMessage = null;
    this.bookName = null;
  }
} 