import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPromiseComponent } from './book-promise.component';

describe('BookPromiseComponent', () => {
  let component: BookPromiseComponent;
  let fixture: ComponentFixture<BookPromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
