import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheFornecedorComponent } from './detalhe-fornecedor.component';

describe('DetalheFornecedorComponent', () => {
  let component: DetalheFornecedorComponent;
  let fixture: ComponentFixture<DetalheFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheFornecedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
