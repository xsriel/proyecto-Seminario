import { TestBed } from '@angular/core/testing';

import { FetchdataServiceService } from './fetchdata-service.service';

describe('FetchdataServiceService', () => {
  let service: FetchdataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchdataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
