import { VeiculosService } from './../../veiculos.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tipo-placa',
  templateUrl: './tipo-placa.component.html',
  styleUrls: ['./tipo-placa.component.scss']
})
export class TipoPlacaComponent {

  @Output() alterarPlaca = new EventEmitter<boolean>()
  placaNova = false;


  constructor(
    private veiculosService: VeiculosService
  ){}

  placa(value: boolean) {
    this.placaNova = value;
    //this.veiculosService.placaNova = this.placaNova;
    this.alterarPlaca.emit(this.placaNova)
  }

}
