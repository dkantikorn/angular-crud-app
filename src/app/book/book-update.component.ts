import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Book } from '../book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book.component.css']
})

export class BookUpdateComponent implements OnInit {

  book: Book = new Book();
  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookService.getBook(params['id']))
      .subscribe(book => this.book = book);
  }
    
  goBack(): void {
    this.location.back();
  }

}
