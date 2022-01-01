import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultaJugadorComponent } from './multa-jugador.component';

describe('MultaJugadorComponent', () => {
  let component: MultaJugadorComponent;
  let fixture: ComponentFixture<MultaJugadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultaJugadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultaJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
