import { TestBed } from '@angular/core/testing';

import { HeroCreateService } from './hero-create.service';

describe('HeroCreateService', () => {
  let service: HeroCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
