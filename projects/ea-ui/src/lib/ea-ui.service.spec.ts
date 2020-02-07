import { TestBed } from '@angular/core/testing';

import { EaUiService } from './ea-ui.service';

describe('EaUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EaUiService = TestBed.get(EaUiService);
    expect(service).toBeTruthy();
  });
});
