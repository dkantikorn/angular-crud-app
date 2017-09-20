import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookFirebaseService } from '../service/book-firebase.service';

@Component({
  selector: 'app-book-firebase-detail',
  templateUrl: './book-firebase-detail.component.html',
  styles: []
})
export class BookFirebaseDetailComponent implements OnInit {

  book: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private bookFirebaseService: BookFirebaseService
  ) { }

  /**
   * 
   * Function load initial book infomation by book key param mapping snapshort
   */
  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('book-id');
    this.bookFirebaseService.getBookByKey(key).subscribe(response => {
      this.book = response;
    });
  }

  /**
   * 
   * Function go back to history page
   * @author sarawutt.b
   */
  goBack(){
    this.location.back();
  }

}
