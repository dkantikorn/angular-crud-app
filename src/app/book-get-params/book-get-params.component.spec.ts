import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGetParamsComponent } from './book-get-params.component';

describe('BookGetParamsComponent', () => {
  let component: BookGetParamsComponent;
  let fixture: ComponentFixture<BookGetParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGetParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGetParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
