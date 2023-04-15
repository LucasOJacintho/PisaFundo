import { Component, Input, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss','../../app.component.scss'],
})
export class TabelaComponent implements OnInit {
  @Input() objetos: any[] = [];

  @Input() propriedades: string[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  veiculoDetalhe(veiculo: Veiculo) {
    console.log(veiculo);
  }
}
