import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPlacaComponent } from './tipo-placa.component';

describe('TipoPlacaComponent', () => {
  let component: TipoPlacaComponent;
  let fixture: ComponentFixture<TipoPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPlacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
