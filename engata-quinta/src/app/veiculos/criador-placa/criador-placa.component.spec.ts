import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriadorPlacaComponent } from './criador-placa.component';

describe('CriadorPlacaComponent', () => {
  let component: CriadorPlacaComponent;
  let fixture: ComponentFixture<CriadorPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriadorPlacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriadorPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
