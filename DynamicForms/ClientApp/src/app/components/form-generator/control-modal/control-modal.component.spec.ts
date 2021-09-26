import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlModalComponent } from './control-modal.component';

describe('ControlModalComponent', () => {
  let component: ControlModalComponent;
  let fixture: ComponentFixture<ControlModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
