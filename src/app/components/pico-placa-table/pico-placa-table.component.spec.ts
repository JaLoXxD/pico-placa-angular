import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoPlacaTableComponent } from './pico-placa-table.component';

describe('PicoPlacaTableComponent', () => {
  let component: PicoPlacaTableComponent;
  let fixture: ComponentFixture<PicoPlacaTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicoPlacaTableComponent]
    });
    fixture = TestBed.createComponent(PicoPlacaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
