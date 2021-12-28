import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJugadoresComponent } from './listar-jugadores.component';

describe('ListarJugadoresComponent', () => {
  let component: ListarJugadoresComponent;
  let fixture: ComponentFixture<ListarJugadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarJugadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
