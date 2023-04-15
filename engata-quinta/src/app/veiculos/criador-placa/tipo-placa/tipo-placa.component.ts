import { VeiculosService } from './../../veiculos.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tipo-placa',
  templateUrl: './tipo-placa.component.html',
  styleUrls: ['./tipo-placa.component.scss'],
})
export class TipoPlacaComponent implements OnInit {
  @Output() alterarPlaca = new EventEmitter<boolean>();
  placaNova : boolean | undefined;
  placaService = '';

  constructor(private service: VeiculosService) {}

  ngOnInit() {
    this.placaNova = this.service.validarPlaca();
  }

  placa(value: boolean) {
    this.placaNova = value;
    this.alterarPlaca.emit(this.placaNova);
  }
}
