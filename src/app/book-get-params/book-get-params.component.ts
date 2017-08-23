import { isNull } from 'util';
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
    //this.getAllBooks();
    this.getBookById();
  }

  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(
      data => this.filteredListOfBooks = data,
      error => this.errorMessage = <any>error);
  }

  getBookById(bookId = null) {
    if (isNull(bookId)) {
      this.getAllBooks();
    } else {
      this.bookService.getBookById(bookId)
        .subscribe(
        data => this.filteredListOfBooks = data,
        error => this.errorMessage = <any>error
        );
    }
  }

  getBooksAfterFilter(category: string, writer: string) {
    this.dataAvailableAfterFilter = true;
    this.filteredListOfBooks = null;
    this.bookService.getBooksAfterFilter(category, writer)
      .subscribe(
      data => this.filteredListOfBooks = data,
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