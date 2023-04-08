import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.component.html',
  styleUrls: ['./informacao.component.scss','../../app.component.scss']
})
export class InformacaoComponent {
  @Input() propriedade: string = "Insira o valor a ser pesquisado";
  showModal = false

}
