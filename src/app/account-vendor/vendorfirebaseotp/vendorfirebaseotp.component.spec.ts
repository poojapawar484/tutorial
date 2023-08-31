import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorfirebaseotpComponent } from './vendorfirebaseotp.component';

describe('VendorfirebaseotpComponent', () => {
  let component: VendorfirebaseotpComponent;
  let fixture: ComponentFixture<VendorfirebaseotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorfirebaseotpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorfirebaseotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
