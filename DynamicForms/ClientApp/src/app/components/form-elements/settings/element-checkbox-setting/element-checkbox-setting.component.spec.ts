import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCheckboxSettingComponent } from './element-checkbox-setting.component';

describe('ElementCheckboxSettingComponent', () => {
  let component: ElementCheckboxSettingComponent;
  let fixture: ComponentFixture<ElementCheckboxSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementCheckboxSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementCheckboxSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
