import { TestBed } from '@angular/core/testing';

import { DirectorHelperService } from './director-helper.service';

describe('DirectorHelperService', () => {
  let service: DirectorHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectorHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
