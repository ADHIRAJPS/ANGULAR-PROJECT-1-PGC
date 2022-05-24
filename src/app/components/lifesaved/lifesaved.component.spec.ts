import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifesavedComponent } from './lifesaved.component';

describe('LifesavedComponent', () => {
  let component: LifesavedComponent;
  let fixture: ComponentFixture<LifesavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifesavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifesavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
