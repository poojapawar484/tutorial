import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapdetailssellerComponent } from './scrapdetailsseller.component';

describe('ScrapdetailssellerComponent', () => {
  let component: ScrapdetailssellerComponent;
  let fixture: ComponentFixture<ScrapdetailssellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrapdetailssellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrapdetailssellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
