import { TestBed } from '@angular/core/testing';

import { ErrorpageService } from './errorpage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [
      HttpClientTestingModule,
      RouterTestingModule.withRoutes([])
    ]
  }));

  it('should be created', () => {
    const service: ErrorpageService = TestBed.get(ErrorpageService);
    expect(service).toBeTruthy();
  });
});
