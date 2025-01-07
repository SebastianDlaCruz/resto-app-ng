import { TestBed } from '@angular/core/testing';

import { FireUpdateImgService } from './fire-update-img.service';

describe('FireUpdateImgService', () => {
  let service: FireUpdateImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireUpdateImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
