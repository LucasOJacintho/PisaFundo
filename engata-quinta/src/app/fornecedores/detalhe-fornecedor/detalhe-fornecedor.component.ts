import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../fornecedores.service';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { Manutencao, ManutencaoRequest } from 'src/app/models/manutencao';
import { VeiculosService } from 'src/app/veiculos/veiculos.service';
import { ActionModal } from 'src/app/shared/action-modal/actionModal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-fornecedor',
  templateUrl: './detalhe-fornecedor.component.html',
  styleUrls: [
    './detalhe-fornecedor.component.scss',
    '../../app.component.scss',
  ],
})
export class DetalheFornecedorComponent implements OnInit {
  fornecedor: Fornecedores;
  listaConcluida: Manutencao[] = [];
  listaAtivas: Manutencao[] = [];
  listaExibida: Manutencao[] = [];
  novoServico: Manutencao;
  tabela: string[] = ['Veiculo', 'Placa', 'Serviço'];
  statusManutencao: string;
  cadastro: boolean = false;
  servico: string;
  placa: string;
  modal: ActionModal = {
    showModal: false,
    mensagem: '',
    detalhes: '',
    alerta: '',
    cancelar: 'Cancelar',
    continuar: 'Continuar',
  };
  resetPlaca: boolean = false;
  atualizado: boolean = false;;

  constructor(
    public service: FornecedoresService,
    public veiculoService: VeiculosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fornecedor = this.service.fornecedorSelecionado;
    this.fornecedor.manutencoes.forEach((manutencao) => {
      if (manutencao.concluido) {
        this.listaConcluida.push(manutencao);
      } else {
        this.listaAtivas.push(manutencao);
      }
    });
    this.ativas();
  }

  cadastrar() {
    this.cadastro = true;
  }

  cadastrarNova() {
    this.placa = this.veiculoService.placa.join('');
    let objeto = {
      valor: this.placa,
      propriedade: 'placa',
    };
    this.veiculoService.findVeiculo(objeto).subscribe((response) => {
      if (response === null) {
        this.veiculoInexistente();
      } else {
        let novaManutencao: ManutencaoRequest = {
          id_veiculo: response.object[0].id,
          id_fornecedor:this.fornecedor.id,
          servico: this.servico,
          concluido: false
        }
        this.service.cadastrarManutencao(novaManutencao).subscribe(() => {})
        this.atualizado = false;
        this.servico=""
        this.resetPlaca = true;
        this.buscarManutencoes();

      }
    });
  }

  buscarManutencoes() {
    this.service.buscarManutencoesPorFornecedorId(this.fornecedor.id).subscribe((manutencoes)=> {
      this.fornecedor.manutencoes = [];
      this.listaConcluida = [];
      this.listaAtivas = [];
      this.fornecedor.manutencoes = manutencoes;
      this.fornecedor.manutencoes.forEach((manutencao) => {
        if (manutencao.concluido) {
          this.listaConcluida.push(manutencao);
        } else {
          this.listaAtivas.push(manutencao);
        }
      });
      if(!this.cadastro){
        this.atualizado = true;
      }
    })
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
    switch (this.veiculoService.pesquisa.propriedade) {
      case 'placa':
        this.veiculoService.placaPesquisada =
          this.veiculoService.pesquisa.valor;
        this.veiculoService.modeloPesquisada = undefined;
        this.veiculoService.chassiPesquisada = undefined;
        break;
      case 'chassi':
        this.veiculoService.chassiPesquisada =
          this.veiculoService.pesquisa.valor;
        this.veiculoService.placaPesquisada = undefined;
        this.veiculoService.modeloPesquisada = undefined;
        break;
      case 'modelo':
        this.veiculoService.modeloPesquisada =
          this.veiculoService.pesquisa.valor;
        this.veiculoService.placaPesquisada = undefined;
        this.veiculoService.chassiPesquisada = undefined;
        break;
    }
    this.router.navigate(['/cadastro-veiculos'], {
      relativeTo: this.activatedRoute,
    });
  }

  concluidas() {
    this.buscarManutencoes()
    this.cadastro = false;
    this.statusManutencao = 'Manutenções Concluídas';
    this.listaExibida = this.listaConcluida;
  }

  ativas() {
    this.buscarManutencoes()
    this.cadastro = false;
    this.statusManutencao = 'Manutenções em Andamento';
    this.listaExibida = this.listaAtivas;
  }

  detalheObjeto(objeto: Manutencao) {
    console.log(objeto);
  }
}
