import { TestBed } from '@angular/core/testing';


import { HttpClientModule } from '@angular/common/http';
import { LinearRegressionService } from './regresion-lineal';

describe('LinearRegressionService', () => {
  let service: LinearRegressionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LinearRegressionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});