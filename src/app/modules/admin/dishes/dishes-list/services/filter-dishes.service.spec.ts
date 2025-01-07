import { TestBed } from '@angular/core/testing';

import { FilterDishesService } from './filter-dishes.service';

describe('FilterDishesService', () => {
  let service: FilterDishesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterDishesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
