import { Component } from '@angular/core';
// import {HelloComponent} from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // entryComponents: [HelloComponent]
})
export class AppComponent {
  title = 'Hello Angular for the tutorial.';
  actor = 'Create By Sarawutt.b';
  data = [
    { id: 123456, firstName: "sarawutt", lastName: "Bureekaew" },
    { id: 567890, firstName: "sarawutt", lastName: "Bureekaew" }
  ];
}




