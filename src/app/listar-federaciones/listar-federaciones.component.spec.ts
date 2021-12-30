import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFederacionesComponent } from './listar-federaciones.component';

describe('ListarFederacionesComponent', () => {
  let component: ListarFederacionesComponent;
  let fixture: ComponentFixture<ListarFederacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFederacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFederacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
