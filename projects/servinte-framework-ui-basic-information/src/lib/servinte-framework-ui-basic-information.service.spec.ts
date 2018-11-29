import { TestBed } from '@angular/core/testing';

import { ServinteFrameworkUiBasicInformationService } from './servinte-framework-ui-basic-information.service';

describe('ServinteFrameworkUiBasicInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServinteFrameworkUiBasicInformationService = TestBed.get(ServinteFrameworkUiBasicInformationService);
    expect(service).toBeTruthy();
  });
});
