import { TestBed } from '@angular/core/testing';

import { HacktonService } from './hackton.service';

describe('HacktonService', () => {
  let service: HacktonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HacktonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
