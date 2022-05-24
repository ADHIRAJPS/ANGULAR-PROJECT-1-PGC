import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalsupportComponent } from './medicalsupport.component';

describe('MedicalsupportComponent', () => {
  let component: MedicalsupportComponent;
  let fixture: ComponentFixture<MedicalsupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalsupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
