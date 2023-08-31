import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrequiredComponent } from './loginrequired.component';

describe('LoginrequiredComponent', () => {
  let component: LoginrequiredComponent;
  let fixture: ComponentFixture<LoginrequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginrequiredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginrequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
