import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';
import { ProprietarioService } from 'src/app/proprietarios/proprietarios.service';
import { Proprietarios } from 'src/app/models/proprietarios.model';
import { Fornecedores } from 'src/app/models/fornecedores.model';

@Component({
  selector: 'app-detalhe-veiculos',
  templateUrl: './detalhe-veiculos.component.html',
  styleUrls: ['./detalhe-veiculos.component.scss']
})
export class DetalheVeiculosComponent implements OnInit{

  proprietario: any;
  fornecedor: Fornecedores;
  manutencoes: any;
  tabela: string[] = ['ATIVIDADE', 'FORNECEDOR','TELEFONE', 'DATA', 'SITUAÇÃO'];

  constructor(public service : VeiculosService, private proprietarioService: ProprietarioService){

  }

  ngOnInit(): void {
      this.encontrarProprietario();
      this.encontrarManutencoes();
  }

  encontrarProprietario(){
    this.proprietarioService.localizarProprietarioPeloIdVeiculo(this.service.veiculoDetalhe.id).subscribe((response) => {
      this.proprietario = response.object;
    });
  }

  encontrarManutencoes(){
    this.service.localizarManutencoes(this.service.veiculoDetalhe.id).subscribe((response) => {
      this.proprietario = response.object;
    });
  }

}
