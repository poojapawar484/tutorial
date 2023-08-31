import { TestBed } from '@angular/core/testing';

import { BehaviourserviceService } from './behaviourservice.service';

describe('BehaviourserviceService', () => {
  let service: BehaviourserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviourserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
