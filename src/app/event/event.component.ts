import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  //  define for the variable handle form input
  firstName = null;
  dataBinding = 'Angular 2 Data Binding';

  //Function trigger when text change or press enter key
  changeText(txt){
    this.firstName = txt.value;
    console.log('text changed to :: ' + txt.value);
  }

  //Function trigger when clicked for the clickMe the button in the form
  clickMe(txt){
    alert('Hello :: ' + txt.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
