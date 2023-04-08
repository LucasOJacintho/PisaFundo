import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.scss','../../app.component.scss']
})
export class ResultadoBuscaComponent implements OnChanges {

  @Input() pesquisa: string | undefined;
  @Input() valorPesquisado: string | undefined;

  ngOnChanges(): void {
    this.pesquisa = this.pesquisa?.toUpperCase();
  }

}
