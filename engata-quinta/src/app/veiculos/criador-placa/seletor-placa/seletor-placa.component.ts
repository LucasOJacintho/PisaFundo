import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { VeiculosService } from '../../veiculos.service';

@Component({
  selector: 'app-seletor-placa',
  templateUrl: './seletor-placa.component.html',
  styleUrls: ['./seletor-placa.component.scss']
})
export class SeletorPlacaComponent implements OnChanges, OnInit {
  @Input() tipo : string | undefined;
  @Input() posicao : number = 0;
  @Input() resetPlaca : boolean = false;

  array: any[] = [];
  letras: String[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","W","Z"];
  numeros: number[] = [1,2,3,4,5,6,7,8,9,0];
  valueArray : number = 0;
  selectedValue : any | undefined;

  constructor(private service: VeiculosService) {}

  ngOnInit(): void {
    if (this.tipo === "numeros") {
      this.array = this.numeros;
    } else {
      this.array = this.letras;
    };
    this.selectedValue = this.array[0];

    if (this.service.placaPesquisada !== undefined) {
      this.selectedValue = this.service.placaPesquisada.substring(this.posicao, this.posicao+1)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.resetarValor(this.resetPlaca)
  }

  alterValue(value: string){
    this.valueArray = value === "-" ?
     this.valueArray - 1 < 0 ? this.array.length - 1 : --this.valueArray :
     this.valueArray + 1 > this.array.length - 1 ? 0 : ++this.valueArray;
    this.selectedValue  = this.array[this.valueArray];
    this.service.placa[this.posicao] = this.selectedValue;
  }

  resetarValor(value: boolean){
      this.selectedValue = this.array[0];
  }
}
