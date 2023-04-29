import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarProprietariosComponent } from './buscar-proprietarios.component';

describe('BuscarProprietariosComponent', () => {
  let component: BuscarProprietariosComponent;
  let fixture: ComponentFixture<BuscarProprietariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarProprietariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarProprietariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
