import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeElementComponent } from './date-range-element.component';

describe('DateRangeElementComponent', () => {
  let component: DateRangeElementComponent;
  let fixture: ComponentFixture<DateRangeElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangeElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
