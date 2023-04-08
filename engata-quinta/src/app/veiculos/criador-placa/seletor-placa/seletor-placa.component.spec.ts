import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorPlacaComponent } from './seletor-placa.component';

describe('SeletorPlacaComponent', () => {
  let component: SeletorPlacaComponent;
  let fixture: ComponentFixture<SeletorPlacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeletorPlacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletorPlacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
