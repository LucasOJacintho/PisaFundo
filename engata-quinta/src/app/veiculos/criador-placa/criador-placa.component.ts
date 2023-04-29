import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-criador-placa',
  templateUrl: './criador-placa.component.html',
  styleUrls: ['./criador-placa.component.scss']
})
export class CriadorPlacaComponent implements OnInit, OnChanges{
  @Input() placaNova : boolean | undefined;
  @Input() resetPlaca: boolean = false;

  constructor(private service: VeiculosService) {

  }

  ngOnInit(): void {
    this.service.placaNova ? this.service.placa = ["A","A","1","A","1","1","1"] : this.service.placa = ["A","A","A","1","1","1","1"]
    this.placaNova = this.service.validarPlaca();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.placaNova = this.service.placaNova;
    this.resetarPlaca(this.resetPlaca)
  }

  alterarPlaca(value: boolean) {
    this.placaNova = value;
  }

  resetarPlaca(value: boolean){
    if(value){
      this.service.placaNova ? this.service.placa = ["A","A","1","A","1","1","1"] : this.service.placa = ["A","A","A","1","1","1","1"]
      this.placaNova = this.service.validarPlaca();
    }
    this.service.resetarPlaca = false;
  }
}
