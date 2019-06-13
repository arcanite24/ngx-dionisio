import { TestBed } from '@angular/core/testing';

import { DionisioService } from './dionisio.service';

describe('DionisioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DionisioService = TestBed.get(DionisioService);
    expect(service).toBeTruthy();
  });
});
