import { TestBed } from '@angular/core/testing';

import { TasksBaseService } from './tasks-base.service';

describe('TasksBaseService', () => {
  let service: TasksBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
