import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementItemsSettingComponent } from './element-items-setting.component';

describe('ElementItemsSettingComponent', () => {
  let component: ElementItemsSettingComponent;
  let fixture: ComponentFixture<ElementItemsSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementItemsSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementItemsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
