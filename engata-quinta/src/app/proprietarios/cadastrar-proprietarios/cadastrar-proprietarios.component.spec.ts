import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProprietariosComponent } from './cadastrar-proprietarios.component';

describe('CadastrarProprietariosComponent', () => {
  let component: CadastrarProprietariosComponent;
  let fixture: ComponentFixture<CadastrarProprietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarProprietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
