import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../book.model';


@Component({
  selector: 'app-book-promise',
  templateUrl: './book-promise.component.html',
  styleUrls: ['./book-promise.component.css']
})

export class BookPromiseComponent implements OnInit {
  promiseBooks: Promise<Book[]>
  books: Book[];
  book = new Book();
  bookName: string;
  errorMessage: String;

  constructor(private bookService: BookService) { }
  // ngOnInit(): void {
  //   this.promiseBooks = this.bookService.getBooksWithPromise();

  //   this.promiseBooks.then(
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
    // this.bookService.getBooksWithPromise()
    //   .then(books => this.books = books,
    //   error => this.errorMessage = <any>error);

    this.promiseBooks = this.bookService.getBooksWithPromise();
    this.promiseBooks.then(
      books => this.books = books,
      error => this.errorMessage = <any>error);
  }

/**
 * 
 * Add Book information
 * @return void
 */
  addBook(): void {
    this.bookService.addBookWithPromise(this.book)
      .then(book => {
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