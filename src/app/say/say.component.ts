import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say',
  templateUrl: './say.component.html',
  styleUrls: ['./say.component.css']
})
export class SayComponent implements OnInit {
  title = 'Say Component.';
  constructor() { }

  ngOnInit() {
  }

}
