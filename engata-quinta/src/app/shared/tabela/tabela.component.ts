import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss','../../app.component.scss'],
})
export class TabelaComponent implements OnInit {
  @Input() objetos: any[] = [];
  @Input() propriedades: string[] = [];
  @Output() detalheObjetoEvent = new EventEmitter<any>()

  constructor() {}

  ngOnInit(): void {
  }

  detalheObjeto(objeto: any) {
    this.detalheObjetoEvent.emit(objeto)
  }
}
