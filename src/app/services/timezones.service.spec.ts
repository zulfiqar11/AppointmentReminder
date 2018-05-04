import { TestBed, inject } from '@angular/core/testing';

import { TimezonesService } from './timezones.service';

describe('TimezonesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimezonesService]
    });
  });

  it('should be created', inject([TimezonesService], (service: TimezonesService) => {
    expect(service).toBeTruthy();
  }));
});
