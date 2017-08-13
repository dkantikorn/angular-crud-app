import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookGetParamsService } from '../services/book.get.params.service';
import { Book } from '../shared/book.model';

@Component({
  selector: 'app-book-get-params',
  templateUrl: './book-get-params.component.html',
  styleUrls: ['./book-get-params.component.css']
})

export class BookGetParamsComponent implements OnInit {
  allBooks: Book[];
  book: Book;
  filteredListOfBooks: Book[];

  errorMessage: String;
  
  dataAvailableById = true;
  dataAvailableAfterFilter = true;

  categories = [
    { name: 'Angular' },
    { name: 'Hibernate' },
    { name: 'Java' }
  ];

  writers = [
    { name: 'Krishna' },
    { name: 'Vishnu' }
  ];

  constructor(private bookService: BookGetParamsService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(
      data => this.allBooks = data,
      error => this.errorMessage = <any>error);
  }

  getBookById(bookId: string) {
    this.dataAvailableById = true;
    this.book = null;
    this.bookService.getBookById(bookId)
      .subscribe(
      data => {
        if (data.length > 0) {
          this.book = data[0];
        } else {
          this.dataAvailableById = false;
        }
      },
      error => this.errorMessage = <any>error
      );
  }

  getBooksAfterFilter(category: string, writer: string) {
    this.dataAvailableAfterFilter = true;
    this.filteredListOfBooks = null;
    this.bookService.getBooksAfterFilter(category, writer)
      .subscribe(
      data => {
        if (data.length > 0) {
          this.filteredListOfBooks = data;
        } else {
          this.dataAvailableAfterFilter = false;
        }
      },
      error => this.errorMessage = <any>error
      );
  }

  /**
   * 
   * Form book by ID params attribute by form data
   * @param bookByIdForm 
   */
  bookById(bookByIdForm: NgForm) {
    let bookId = bookByIdForm.controls['bookId'].value;
    this.getBookById(bookId);
  }

  /**
   * 
   * Form book by categories | writer params attribute by form data
   * @param bookByIdForm 
   */
  filterBooks(bookByIdForm: NgForm) {
    let catg = bookByIdForm.controls['category'].value;
    let wtr = bookByIdForm.controls['writer'].value;
    this.getBooksAfterFilter(catg, wtr);
  }
} 