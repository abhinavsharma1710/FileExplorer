import { TestBed } from '@angular/core/testing';

import { ExplorerServiceService } from './explorer-service.service';

describe('ExplorerServiceService', () => {
  let service: ExplorerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
