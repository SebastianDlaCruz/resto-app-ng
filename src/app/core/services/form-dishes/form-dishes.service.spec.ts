import { TestBed } from '@angular/core/testing';

import { FormDishesService } from './form-dishes.service';

describe('FormDishesService', () => {
  let service: FormDishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
