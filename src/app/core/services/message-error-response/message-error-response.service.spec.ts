import { TestBed } from '@angular/core/testing';

import { MessageErrorResponseService } from './message-error-response.service';

describe('MessageErrorResponseService', () => {
  let service: MessageErrorResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageErrorResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
