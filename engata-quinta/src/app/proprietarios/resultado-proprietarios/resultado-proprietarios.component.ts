import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Proprietarios } from 'src/app/models/proprietarios.model';
import { Veiculo } from 'src/app/models/veiculo.model';
import { ProprietarioService } from '../proprietarios.service';
import { VeiculosService } from 'src/app/veiculos/veiculos.service';

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
  telaDeDetalhes: boolean = false;

  constructor( public service:ProprietarioService, public veiculoServe: VeiculosService) { }

  ngOnInit(): void {
    this.proprietario = this.service.proprietario;
    this.documento = this.proprietario.cpf === null ? this.proprietario.cnpj : this.proprietario.cpf;
    this.service.telaResultados = true;
    this.service.cadastrarVeiculo = false
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.service.telaResultados = true;
    this.service.cadastroRealizado;
    this.localizarProprietario()
  }

  mudarTela() {
    this.service.cadastrarVeiculo = true;
  }

  localizarProprietario() {
    let objeto = {
      propriedade: "",
      valor: this.documento
    }
    this.service.localizarProprietario(objeto).subscribe((response) => {
      this.objetos = this.veiculos = response.object[0].veiculos;
    })
  }

  detalheObjeto(objeto: any) {
    this.veiculoServe.veiculoDetalhe = objeto;
    this.telaDeDetalhes = true;
  }
}
