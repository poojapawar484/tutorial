import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcodeComponent } from './vendorcode.component';

describe('VendorcodeComponent', () => {
  let component: VendorcodeComponent;
  let fixture: ComponentFixture<VendorcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
