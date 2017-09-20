import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookFirebaseService } from './service/book-firebase.service';

@Component({
  selector: 'app-book-firebase',
  templateUrl: './book-firebase.component.html',
  styles: []
})
export class BookFirebaseComponent implements OnInit {

  books: FirebaseListObservable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private bookFirebaseService: BookFirebaseService
  ) { }

  ngOnInit() {
    this.loadAllBooks();
  }

  /**
   * 
   * Load all each book on firebase system
   * @author  sarawutt.b
   */
  loadAllBooks() {
    // this.books = this.db.list('books');
    // console.log(this.books);
    this.books = this.bookFirebaseService.loadAllBooks();
  }

  /**
   * 
   * Function extract for book detail
   * @author  sarawutt.b
   * @param book as book object information
   */
  detailBook(book?: any) {
    console.log(book);
    this.router.navigate([`/firebase-book/detail/${book.$key}`]);
  }

  /**
   * 
   * Function update the book wrapper function to book
   * @author  sarawutt.b
   * @param book as book object information
   */
  updateBook(book?: any) {
    console.log(book);
    this.router.navigate([`/firebase-book/edit/${book.$key}`]);
  }

  /**
   * 
   * Function wrapper dispatch to delete the book information
   * @author  sarawutt.b
   * @param book as book object information
   */
  deleteBook(book?: any) {
    console.log(book);
    if (confirm("Are you sure for delete the book")) {
      this.bookFirebaseService.deleteBook(book);
    }
  }

}
