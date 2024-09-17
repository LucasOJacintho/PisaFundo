import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoProprietariosComponent } from './resultado-proprietarios.component';

describe('ResultadoProprietariosComponent', () => {
  let component: ResultadoProprietariosComponent;
  let fixture: ComponentFixture<ResultadoProprietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoProprietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
