import { Component } from '@angular/core';
import { ActionModal } from 'src/app/shared/action-modal/actionModal';
import { ProprietarioService } from '../proprietarios.service';
import { Router } from '@angular/router';
import {
  Proprietarios,
  ProprietariosRequest,
} from 'src/app/models/proprietarios.model';

@Component({
  selector: 'app-cadastrar-proprietarios',
  templateUrl: './cadastrar-proprietarios.component.html',
  styleUrls: [
    './cadastrar-proprietarios.component.scss',
    '../../app.component.scss',
  ],
})
export class CadastrarProprietariosComponent {
  nome: string = '';
  cpf: string;
  cnpj: string;
  aniversario: Date;
  modal: ActionModal = {
    showModal: false,
    mensagem: '',
    detalhes: '',
    alerta: '',
    cancelar: 'Cancelar',
    continuar: 'Continuar',
  };
  botaoCadastrar: string = 'cancelar';
  validadeDados: string | undefined;
  proprietario: ProprietariosRequest;
  documentoSelecionado: boolean = false;
  dataAtual: String = new Date(Date.now()).toLocaleDateString();

  constructor(private service: ProprietarioService, private router: Router) { }

  ngOnInit(): void {
    this.cpf = this.service.cpfPesquisado === undefined ? '' : this.service.cpfPesquisado;
    this.cnpj = this.service.cnpjPesquisado === undefined ? '' : this.service.cnpjPesquisado;
    this.documentoSelecionado = this.cnpj === '' ? false : true;
    if (this.service.cadastrarProprietario === false) {
      this.cpf = this.cnpj = undefined
    }
    this.service.cadastrarProprietario = false
  }

  prepararProprietario() {
    if(!this.documentoSelecionado) {
      this.proprietario = {
        cpf: this.cpf,
        nome: this.nome,
        cnpj: null,
        aniversario: this.aniversario,
      };
    }
    else {
      this.proprietario = {
        cpf: null,
        nome: this.nome,
        cnpj: this.cnpj,
        aniversario: this.aniversario,
      };
    }
    if((!this.documentoSelecionado && this.cpf.length===11) || (this.documentoSelecionado && this.cnpj.length===14)) {
      this.confirmarCadastro();
    }
  }

  confirmarCadastro() {
    this.modal = {
      showModal: true,
      mensagem: 'Deseja cadastra o proprietário',
      detalhes:
        'Caso queira confirmar o cadastro do proprieatário basta clicar em Cadastrar.',
      alerta: '',
      cancelar: 'Cancelar',
      continuar: 'Cadastrar',
    };
  }

  continuar(valor: string) {
    this.salvarProprietario();
    this.modal.showModal = false;
  }

  salvarProprietario() {
    this.service.salvarProprietarios(this.proprietario).subscribe({
      next: () => {
        this.pegarTodosProprietarios();
        this.router.navigate(['/busca-proprietarios'], {
        });
      },
      error: () => { },
    });
  }

  pegarTodosProprietarios() {
    this.service.pegarTodosProprietarios().subscribe((response) => {
      this.service.proprietarios = response.object;
    });
  }

  documento(value: boolean) {
    this.documentoSelecionado = value;
  }
}
