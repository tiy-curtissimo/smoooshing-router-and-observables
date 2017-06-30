import { TestBed, inject } from '@angular/core/testing';

import { HeartBeatService } from './heart-beat.service';

describe('HeartBeatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeartBeatService]
    });
  });

  it('should be created', inject([HeartBeatService], (service: HeartBeatService) => {
    expect(service).toBeTruthy();
  }));
});
