import { TestBed } from '@angular/core/testing';

import { UIElementService } from './ui-element.service';

describe('UIElementService', () => {
  let service: UIElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UIElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
