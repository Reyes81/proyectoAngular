import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaJugadorComponent } from './baja-jugador.component';

describe('BajaJugadorComponent', () => {
  let component: BajaJugadorComponent;
  let fixture: ComponentFixture<BajaJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
