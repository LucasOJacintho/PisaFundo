import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Proprietarios } from 'src/app/models/proprietarios.model';
import { Veiculo } from 'src/app/models/veiculo.model';
import { ProprietarioService } from '../proprietarios.service';

@Component({
  selector: 'app-resultado-proprietarios',
  templateUrl: './resultado-proprietarios.component.html',
  styleUrls: ['./resultado-proprietarios.component.scss','../../app.component.scss']
})
export class ResultadoProprietariosComponent implements OnInit,OnChanges  {

  pesquisa: any | undefined;
  proprietario: Proprietarios;
  documento: string
  veiculos: Veiculo[] = [];
  tabela: string[] = ["MODELO", "ANO", "PLACA", "CHASSI"]
  objetos: any[] = []
  cadastrarVeiculo: boolean = false;

  constructor( public service:ProprietarioService) { }

  ngOnInit(): void {
    this.proprietario = this.service.proprietario;
    this.documento = this.proprietario.cpf === "" ? this.proprietario.cnpj : this.proprietario.cpf;
    this.objetos = this.veiculos = this.proprietario.veiculos;
    this.service.telaResultados = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.service.telaResultados = true;
  }

  mudarTela() {
    this.cadastrarVeiculo = this.service.cadastrarVeiculo = true;
  }
}
