import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseotpComponent } from './firebaseotp.component';

describe('FirebaseotpComponent', () => {
  let component: FirebaseotpComponent;
  let fixture: ComponentFixture<FirebaseotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirebaseotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
