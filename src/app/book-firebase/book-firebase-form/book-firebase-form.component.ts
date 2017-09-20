import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { BookFirebaseService } from '../service/book-firebase.service';

@Component({
  selector: 'app-book-firebase-form',
  templateUrl: './book-firebase-form.component.html',
  styles: []
})
export class BookFirebaseFormComponent implements OnInit {

  title: string = "Add for new Book to firebase.";
  book: any = {};
  bookKey;//Key of the book were your want to detail / update / delete / 

  bookForm = new FormGroup({
    isbn: new FormControl(),
    name: new FormControl(),
    description: new FormControl(),
    author: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private db: AngularFireDatabase,
    private bookFirebaseService: BookFirebaseService
  ) { }

  ngOnInit() {
    this.bookKey = this.route.snapshot.paramMap.get('book-id');
    if (this.bookKey) {
      this.title = "Edit for Book information.";
      this.getBookByKey(this.bookKey);
    }
  }

  /**
   * 
   * Add book to firebase daatbase
   * @author  sarawutt.b
   */
  addBook() {
    console.log(this.bookForm.value);
    //this.db.list('books').push(this.bookForm.value);
    if (this.bookKey) {
      this.bookFirebaseService.updateBook(this.bookKey, this.bookForm.value).then(this.firebaseHome);
    } else {
      this.bookFirebaseService.addBook(this.bookForm.value).then(this.firebaseHome);
    }

  }

  /**
   * 
   * Function get book information by book key
   * @author sarawutt.b
   * @param book as book object
   */
  getBookByKey($key: any) {
    this.bookFirebaseService.getBookByKey($key).subscribe(response => {
      this.book = response;
    });
  }

  /**
   * 
   * Go back go bake page
   */
  goBack() {
    this.location.back();
  }

  /**
   * 
   * Function go to book firebase home URL
   * @author  sarawutt.b
   */
  firebaseHome() {
    this.router.navigate(['/firebase-book']);
  }

}
