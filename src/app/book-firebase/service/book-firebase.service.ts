import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class BookFirebaseService {

  baseURL = "books";
  bookList: FirebaseListObservable<any[]>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private db: AngularFireDatabase
  ) { }

  /**
 * 
 * Load all each book on firebase system
 * @author  sarawutt.b
 */
  loadAllBooks(): FirebaseListObservable<any[]> {
    this.bookList = this.db.list(this.baseURL);
    return this.bookList;
  }

  /**
   * 
   * Function get book information by book key
   * @author sarawutt.b
   * @param key as book key param
   */
  getBookByKey($key: any) {
    const bookPath = `${this.baseURL}/${$key}`;
    return this.db.object(bookPath);
  }

  /**
   * 
   * Add book to firebase daatbase
   * @author  sarawutt.b
   */
  addBook(book: any) {
    return this.db.list(this.baseURL).push(book);
  }

  /**
   * 
   * Function update the book wrapper function to book
   * @author  sarawutt.b
   * @param book as book object information
   */
  updateBook(key: any, book?: any) {
    return this.db.list(this.baseURL).update(key, book);
  }

  /**
   * 
   * Function wrapper dispatch to delete the book information
   * @author  sarawutt.b
   * @param book as book object information
   */
  deleteBook(book?: any) {
    console.log(book.$key);
    this.bookList.remove(book.$key);
  }

}
