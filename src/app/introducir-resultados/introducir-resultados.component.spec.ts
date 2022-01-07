import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroducirResultadosComponent } from './introducir-resultados.component';

describe('IntroducirResultadosComponent', () => {
  let component: IntroducirResultadosComponent;
  let fixture: ComponentFixture<IntroducirResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroducirResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroducirResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
