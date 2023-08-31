import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellvehicleComponent } from './sellvehicle.component';

describe('SellvehicleComponent', () => {
  let component: SellvehicleComponent;
  let fixture: ComponentFixture<SellvehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellvehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
