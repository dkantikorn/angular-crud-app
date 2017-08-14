import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from '../book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book.component.css']
})

export class BookAddComponent implements OnInit {

  books: Book[];
  book: Book = new Book();

  constructor(
    private router: Router,
    private bookService: BookService,
    private location: Location
  ) { }

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  addBook(): void {
    this.bookService.addBook(this.book);
    //this.router.navigate(['/home']);
    this.router.navigate(['/manage-book']);
  }

  goBack(): void {
    this.location.back();
  }

}
