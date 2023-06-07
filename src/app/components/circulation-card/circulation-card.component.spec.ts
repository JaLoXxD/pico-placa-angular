import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationCardComponent } from './circulation-card.component';

describe('CirculationCardComponent', () => {
  let component: CirculationCardComponent;
  let fixture: ComponentFixture<CirculationCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirculationCardComponent]
    });
    fixture = TestBed.createComponent(CirculationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
