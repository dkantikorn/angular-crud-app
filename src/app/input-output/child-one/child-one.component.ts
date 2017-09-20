import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styles: []
})
export class ChildOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  ctMsg: string;

  @Input('ctArray')
  myctArray: Array<string>

  @Input('studentAddMsg')
  addMsg: string;

  @Output('addStudentEvent')
  addStdEvent = new EventEmitter<Student>();

  @Output()
  sendMsgEvent = new EventEmitter<string>();

  student = new Student();
  childTitle = '---Child One---';
  message = 'Send Message'
  msg: string;

  /**
   * 
   * Event binding with Output to result return to the parent
   */
  addStudent() {
    console.log(this.student);
    this.addStdEvent.emit(this.student);
  }

  /**
   * 
   * Event binding with Output to result return to the parent
   */
  sendMsg() {
    this.sendMsgEvent.emit(this.msg);
  }

}
