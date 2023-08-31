import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireotpComponent } from './fireotp.component';

describe('FireotpComponent', () => {
  let component: FireotpComponent;
  let fixture: ComponentFixture<FireotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
