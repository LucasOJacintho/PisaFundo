import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFornecedoresComponent } from './buscar-fornecedores.component';

describe('BuscarFornecedoresComponent', () => {
  let component: BuscarFornecedoresComponent;
  let fixture: ComponentFixture<BuscarFornecedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarFornecedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarFornecedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
