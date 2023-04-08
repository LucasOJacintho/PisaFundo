import { ActionModal } from './../shared/action-modal/actionModal';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../models/veiculo.model';
import { VeiculosService } from './veiculos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss'],
})
export class VeiculosComponent implements OnInit {
  veiculos: Veiculo[] = [];
  veiculo!: Veiculo;
  placa!: string;
  ano!: number;
  modelo!: string;
  tela = 'Veiculos';
  propriedades: any[] = [
    {
      label: 'Placa',
      value: 'placa',
      mensagem:
        'A placa deve ser composta de 7 caracters, sem espaços e caracteres especiais',
      preenchimento: 'Insira a placa do veiculo',
      validador: 7,
      regex: /\W|_/,
    },
    {
      label: 'Nº Chassi',
      value: 'chassi',
      mensagem:
        'A placa deve ser composta de 17 caracters, sem espaços e caracteres especiais',
      preenchimento: 'Insira o chassi do veiculo',
      validador: 17,
      regex: /\W|_/,
    },
    {
      label: 'Modelo',
      value: 'modelo',
      mensagem: 'Inserir o nome do modelo do veiculo apenas.',
      preenchimento: 'Insira o modelo do veiculo',
      validador: 15,
      regex: '',
    },
  ];
  modal: ActionModal = {
    showModal: false,
    mensagem: '',
    detalhes: '',
    alerta: '',
    cancelar: 'Cancelar',
    continuar: 'Continuar',
  };

  constructor(private service: VeiculosService, private router: Router) {}

  ngOnInit(): void {
    this.findAllVeiculos();
  }

  findAllVeiculos() {
    this.service.getAllVeiculos().subscribe((response) => {
      this.veiculos = response.object;
    });
  }

  procurarVeiculo(objeto: any) {
    this.service.objeto = this.tratarPesquisa(objeto);
    this.service.findVeiculo(this.service.objeto).subscribe((response) => {
      if (response.object.length === 0) this.veiculoInexistente();
      else this.veiculos = response.object;
    });
    if (this.veiculos.length > 0) {
      this.router.navigate(['/resultados'])
    }
  }

  tratarPesquisa(objeto: any): any {
    let valor: string = objeto.valor;
    valor = valor.trim();
    let valorArray: string[] = valor.split('');
    for (let i = 0; i < valorArray.length; i++) {
      valorArray[i] = valorArray[i].toUpperCase();
    }
    objeto.valor = valorArray.join('');
    return objeto;
  }

  veiculoInexistente() {
    this.modal = {
      showModal: true,
      mensagem: 'Não existe veiculo cadastrado com o valor procurado.',
      detalhes:
        'Caso queira queira adicionar o veículo basta clicar em ADICIONAR.',
      alerta:
        'Ao clicar em Adicionar você será redirecionado para a página de cadstro de véiculos.',
      cancelar: 'Cancelar',
      continuar: 'Adicionar',
    };
  }

  salvarVeiculo() {
    //Salvar Veiculos deveria primeiramente validar no banco se essas informações (Placa e Chassis) são únicas
    //Caso não deveria devolver uma mensagem de erro para o front tratar (Denunciar, Corrigir)

    this.veiculo = {
      placa: this.placa,
      ano: this.ano,
      modelo: this.modelo,
      id: ++this.veiculos.length,
    };
    this.service.salvarVeiculos(this.veiculo).subscribe();
    this.findAllVeiculos();
  }

  //Componente Placa
}
