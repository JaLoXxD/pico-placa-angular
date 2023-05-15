import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomH1Component } from './custom-h1.component';

describe('CustomH1Component', () => {
  let component: CustomH1Component;
  let fixture: ComponentFixture<CustomH1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomH1Component]
    });
    fixture = TestBed.createComponent(CustomH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
