import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styles: []
})
export class InputOutputComponent implements OnInit {

  parentTitle = 'Parent Component';

  //Property from parent to child-one component
  cityMsg = 'City Message From Parent to Child one';
  cityArray = ['CakePHP', 'Laravel', 'YII2'];
  stdAddMsg = 'Add new of Student';

  //Property for child component two
  stdMsg = 'Student Leader Detail';
  stdLeaderObj = new Student('Sarawutt', 'Bureekeaw');

  //Property used in parent
  stdFullName = '';
  sum = '';
  msg = '';

  constructor() { }

  ngOnInit() {
  }

  /**
   * 
   * Event binding with Output code appear on the t
   */
  saveData(std) {
    console.log(std);
    this.stdFullName = std.fname + ' ' + std.lname;
  }

  printSum(res) {
    this.sum = res;
  }

  printMsg(msg) {
    this.msg = msg;
  }
}
