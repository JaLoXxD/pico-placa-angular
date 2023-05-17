import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationFormComponent } from './circulation-form.component';

describe('CirculationFormComponent', () => {
  let component: CirculationFormComponent;
  let fixture: ComponentFixture<CirculationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CirculationFormComponent]
    });
    fixture = TestBed.createComponent(CirculationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
