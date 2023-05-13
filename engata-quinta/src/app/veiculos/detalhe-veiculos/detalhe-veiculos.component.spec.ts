import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheVeiculosComponent } from './detalhe-veiculos.component';

describe('DetalheVeiculosComponent', () => {
  let component: DetalheVeiculosComponent;
  let fixture: ComponentFixture<DetalheVeiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheVeiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
