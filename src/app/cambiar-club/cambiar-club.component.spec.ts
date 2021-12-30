import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarClubComponent } from './cambiar-club.component';

describe('CambiarClubComponent', () => {
  let component: CambiarClubComponent;
  let fixture: ComponentFixture<CambiarClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
