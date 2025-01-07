import { TestBed } from '@angular/core/testing';

import { DishesAddFacadeService } from './dishes-add-facade.service';

describe('DishesAddFacadeService', () => {
  let service: DishesAddFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishesAddFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
