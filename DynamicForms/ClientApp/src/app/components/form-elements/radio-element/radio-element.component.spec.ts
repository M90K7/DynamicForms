import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioElementComponent } from './radio-element.component';

describe('RadioElementComponent', () => {
  let component: RadioElementComponent;
  let fixture: ComponentFixture<RadioElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
