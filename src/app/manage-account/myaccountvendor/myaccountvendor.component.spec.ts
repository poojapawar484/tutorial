import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyaccountvendorComponent } from './myaccountvendor.component';

describe('MyaccountvendorComponent', () => {
  let component: MyaccountvendorComponent;
  let fixture: ComponentFixture<MyaccountvendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyaccountvendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyaccountvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
