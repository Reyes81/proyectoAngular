import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApuntarseTorneoComponent } from './apuntarse-torneo.component';

describe('ApuntarseTorneoComponent', () => {
  let component: ApuntarseTorneoComponent;
  let fixture: ComponentFixture<ApuntarseTorneoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApuntarseTorneoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApuntarseTorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
