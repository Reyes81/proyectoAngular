import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarEntrenamientoComponent } from './reservar-entrenamiento.component';

describe('ReservarEntrenamientoComponent', () => {
  let component: ReservarEntrenamientoComponent;
  let fixture: ComponentFixture<ReservarEntrenamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservarEntrenamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservarEntrenamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
