import { TestBed } from '@angular/core/testing';

import { QuestionFuncService } from './question-func.service';

describe('QuestionFuncService', () => {
  let service: QuestionFuncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionFuncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
