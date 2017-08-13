import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  book: Book = new Book();

  constructor(
    private bookService: BookService,
    private router: Router) { }
  /**
   * 
   * Angular on initial like main function
   */
  ngOnInit(): void {
    this.getBooks();
  }

  /**
   * 
   * Read all book information
   */
  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  /**
   * 
   * Function update data on to the book object
   * @param id as string of data ID
   */
  updateBook(id: string): void {
    this.router.navigate(['/update-book', id]);
  }

  /**
   * 
   * Function delete data on to the book object
   * @param id as string of data ID
   */
  deleteBook(id: string): void {
    this.bookService.deleteBook(id);
  }



}
