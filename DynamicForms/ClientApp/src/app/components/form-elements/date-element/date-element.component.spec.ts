import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateElementComponent } from './date-element.component';

describe('DateElementComponent', () => {
  let component: DateElementComponent;
  let fixture: ComponentFixture<DateElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
