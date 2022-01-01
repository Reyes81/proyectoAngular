import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiberarMultaComponent } from './liberar-multa.component';

describe('LiberarMultaComponent', () => {
  let component: LiberarMultaComponent;
  let fixture: ComponentFixture<LiberarMultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiberarMultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiberarMultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
