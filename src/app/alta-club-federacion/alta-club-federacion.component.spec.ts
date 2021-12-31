import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaClubFederacionComponent } from './alta-club-federacion.component';

describe('AltaClubFederacionComponent', () => {
  let component: AltaClubFederacionComponent;
  let fixture: ComponentFixture<AltaClubFederacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaClubFederacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaClubFederacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
