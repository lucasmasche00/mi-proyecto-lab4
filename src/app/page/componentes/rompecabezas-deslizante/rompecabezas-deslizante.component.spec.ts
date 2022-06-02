import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RompecabezasDeslizanteComponent } from './rompecabezas-deslizante.component';

describe('RompecabezasDeslizanteComponent', () => {
  let component: RompecabezasDeslizanteComponent;
  let fixture: ComponentFixture<RompecabezasDeslizanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RompecabezasDeslizanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RompecabezasDeslizanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
