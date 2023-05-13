import { Veiculo } from './../../models/veiculo.model';
import { Component, Input, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.scss', '../../app.component.scss'],
})
export class ResultadoBuscaComponent implements OnInit {
  pesquisa: any | undefined;
  veiculo: Veiculo[] = [];
  tabela: string[] = ['MODELO', 'ANO', 'PLACA', 'CHASSI'];
  objetos: any[] = [];

  constructor(private service: VeiculosService, private router: Router) {}

  ngOnInit(): void {
    this.pesquisa = this.service.pesquisa;
    this.objetos = this.service.veiculo;
  }

  detalheObjeto(objeto: any) {
    this.service.veiculoDetalhe = objeto;
    this.router.navigate(['/detalhe-veiculos'], {
    });
  }
}
