import { Component, OnInit } from '@angular/core';
import { FornecedoresService } from '../fornecedores.service';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { Manutencao, ManutencaoRequest } from 'src/app/models/manutencao';
import { VeiculosService } from 'src/app/veiculos/veiculos.service';
import { ActionModal } from 'src/app/shared/action-modal/actionModal';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

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
  tabela: string[] = ['VEICULO', 'PLACA', 'SERVIÇO', 'CONCLUIR'];
  tabelaConcluidos: string[] = ['VEICULO', 'PLACA', 'SERVIÇO',];
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
  atualizado: boolean = false;loading: boolean;
;

  constructor(
    public service: FornecedoresService,
    public veiculoService: VeiculosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public loginService : LoginService,
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
    if(!this.cadastro) {
      this.servico=""
      this.resetPlaca = true;
    }
    this.cadastro = true;
  }

  cadastrarNova() {
    this.placa = this.veiculoService.placa.join('');
    let objeto = {
      valor: this.placa,
      propriedade: 'placa',
    };
    this.veiculoService.findVeiculo(objeto).subscribe((response) => {
      if (response.object === null) {
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
        let interval = setInterval(() => {
          this.loading = false;
          this.ativas();
          clearInterval(interval)
        },1000, this.loading = true)
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
      if(this.listaAtivas.length + this.listaConcluida.length === manutencoes.length) {
        this.atualizado = true
        if(this.statusManutencao === 'Manutenções em Andamento') {
          this.listaExibida = this.listaAtivas;
        }
      } else {
        this.atualizado = false
      }
    })
  }

  veiculoInexistente() {
    this.modal = {
      showModal: true,
      mensagem: 'Não existe veiculo cadastrado com o valor procurado.',
      detalhes: 'Caso queira adicionar o veículo favor entrar em contato com o Administrador.',
      alerta: '',
      cancelar: 'Continuar',
      continuar: '',
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
    this.atualizado = false;
    this.statusManutencao = 'Manutenções em Andamento';
    this.cadastro = false;
    this.buscarManutencoes()
  }

  detalheObjeto(objeto: Manutencao) {
  }

  concluir(id: number) {
    this.service.concluirManutencao(id).subscribe(()=> {})
    this.atualizado = false;
    this.listaExibida = [];
    this.listaAtivas = [];
      let interval = setInterval(() => {
        this.ativas();
        clearInterval(interval)
      },1000)
  }

  sair() {
    this.loginService.acessoPermitido = false;
    this.loginService.tipoAcesso = null
    this.router.navigate(['/login'], { relativeTo: this.activatedRoute });
  }
}
