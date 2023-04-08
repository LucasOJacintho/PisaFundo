import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-seletor-placa',
  templateUrl: './seletor-placa.component.html',
  styleUrls: ['./seletor-placa.component.scss']
})
export class SeletorPlacaComponent {
  @Input() tipo : string | undefined;
  array: any[] = [];
  letras: String[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","W","Z"];
  numeros: number[] = [1,2,3,4,5,6,7,8,9,0];
  valueArray : number = 0;
  selectedValue : any | undefined;

  ngOnInit(): void {
    if (this.tipo === "numeros") {
      this.array = this.numeros;
    } else {
      this.array = this.letras;
    };
    this.selectedValue = this.array[0];
  }

  alterValue(value: string){
    this.valueArray = value === "-" ?
     this.valueArray - 1 < 0 ? this.array.length - 1 : --this.valueArray :
     this.valueArray + 1 > this.array.length - 1 ? 0 : ++this.valueArray;
    this.selectedValue  = this.array[this.valueArray];
  }
}
