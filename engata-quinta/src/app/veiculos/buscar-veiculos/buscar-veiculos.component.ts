import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.model';
import { ActionModal } from 'src/app/shared/action-modal/actionModal';
import { VeiculosService } from '../veiculos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprietarioService } from 'src/app/proprietarios/proprietarios.service';

@Component({
  selector: 'app-buscar-veiculos',
  templateUrl: './buscar-veiculos.component.html',
  styleUrls: ['./buscar-veiculos.component.scss'],
})
export class BuscarVeiculosComponent implements OnInit {
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
      regex: null,
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

  constructor(
    private service: VeiculosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public proprietarioService: ProprietarioService
  ) {}

  ngOnInit(): void {
    this.findAllVeiculos();
    this.proprietarioService.telaDeDetalhes = false;
  }

  findAllVeiculos() {
    this.service.getAllVeiculos().subscribe((response) => {
      this.veiculos = response.object;
      this.service.veiculo = this.veiculos;
    });
  }

  procurarVeiculo(objeto: any) {
    this.service.pesquisa = this.tratarPesquisa(objeto);
    this.service.findVeiculo(this.service.pesquisa).subscribe((response) => {
      this.veiculos = response.object;
      this.service.veiculo = response.object;
      if (this.veiculos !== null) {
        this.router.navigate(['/resultados-veiculos'], {
          relativeTo: this.activatedRoute,
        });
      } else this.veiculoInexistente();
    });
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
      detalhes: 'Caso queira adicionar o veículo basta clicar em ADICIONAR.',
      alerta:
        'Ao clicar em Adicionar você será redirecionado para a página de cadstro de véiculos.',
      cancelar: 'Cancelar',
      continuar: 'Adicionar',
    };
  }

  continuar(valor: string) {
    switch (this.service.pesquisa.propriedade) {
      case 'placa':
        this.service.placaPesquisada = this.service.pesquisa.valor;
        this.service.modeloPesquisada = undefined;
        this.service.chassiPesquisada = undefined;
        break;
      case 'chassi':
        this.service.chassiPesquisada = this.service.pesquisa.valor;
        this.service.placaPesquisada = undefined;
        this.service.modeloPesquisada = undefined;
        break;
      case 'modelo':
        this.service.modeloPesquisada = this.service.pesquisa.valor;
        this.service.placaPesquisada = undefined;
        this.service.chassiPesquisada = undefined;
        break;
    }
    this.router.navigate(['/cadastro-veiculos'], { relativeTo: this.activatedRoute });
  }
}
