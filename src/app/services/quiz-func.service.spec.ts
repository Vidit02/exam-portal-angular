import { TestBed } from '@angular/core/testing';

import { QuizFuncService } from './quiz-func.service';

describe('QuizFuncService', () => {
  let service: QuizFuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizFuncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
