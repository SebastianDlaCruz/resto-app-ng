import { TestBed } from '@angular/core/testing';

import { DataCardBankService } from './data-card-bank.service';

describe('DataCardBankService', () => {
  let service: DataCardBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCardBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
