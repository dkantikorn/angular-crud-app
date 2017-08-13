import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title = 'Demo Component.';
  data = [
    { id: 123456, firstName: "sarawutt", lastName: "Bureekaew" },
    { id: 567890, firstName: "sarawutt", lastName: "Bureekaew" }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
