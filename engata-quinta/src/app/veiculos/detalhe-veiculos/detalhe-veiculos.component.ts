import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { ProprietarioService } from 'src/app/proprietarios/proprietarios.service';
import { Proprietarios } from 'src/app/models/proprietarios.model';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { Manutencao } from 'src/app/models/manutencao';

@Component({
  selector: 'app-detalhe-veiculos',
  templateUrl: './detalhe-veiculos.component.html',
  styleUrls: ['./detalhe-veiculos.component.scss', '../../app.component.scss']
})
export class DetalheVeiculosComponent implements OnInit{

  proprietario: any;
  fornecedor: Fornecedores;
  manutencoes: Manutencao[];
  tabela: string[] = ['ATIVIDADE', 'FORNECEDOR','TELEFONE', 'DATA', 'SITUAÇÃO'];

  constructor(public service : VeiculosService, private proprietarioService: ProprietarioService){

  }

  ngOnInit(): void {
    this.proprietario = this.proprietarioService.proprietario;
    if(!this.proprietarioService.telaDeDetalhes) {
      this.manutencoes = this.service.veiculoDetalhe.manutencoes
      //this.encontrarProprietario();
      //this.encontrarManutencoes();
    }
    else {
      this.proprietario = this.proprietarioService.proprietario;
      let index = this.proprietarioService.proprietario.veiculos.findIndex((element) => element.id === this.proprietarioService.idVeiculo)
      this.manutencoes = this.proprietarioService.proprietario.veiculos[index].manutencoes
    }
  }

  encontrarProprietario(){
    this.proprietarioService.localizarProprietarioPeloIdVeiculo(this.service.veiculoDetalhe.id).subscribe((response) => {
      this.proprietario = response.object;
    });
  }

  encontrarManutencoes(){
    this.service.localizarManutencoes(this.service.veiculoDetalhe.id).subscribe((response) => {
      this.manutencoes = response.object;
    });
  }

}
