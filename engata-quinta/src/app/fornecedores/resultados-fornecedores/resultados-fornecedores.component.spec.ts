import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosFornecedoresComponent } from './resultados-fornecedores.component';

describe('ResultadosFornecedoresComponent', () => {
  let component: ResultadosFornecedoresComponent;
  let fixture: ComponentFixture<ResultadosFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadosFornecedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
