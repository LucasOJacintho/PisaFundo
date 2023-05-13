import { Component } from '@angular/core';
import { Fornecedores, FornecedoresRequest } from 'src/app/models/fornecedores.model';
import { ActionModal } from 'src/app/shared/action-modal/actionModal';
import { FornecedoresService } from '../fornecedores.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-fornecedores',
  templateUrl: './cadastrar-fornecedores.component.html',
  styleUrls: ['./cadastrar-fornecedores.component.scss','../../app.component.scss']
})
export class CadastrarFornecedoresComponent {

  nome: string;
  cnpj: string;
  telefone: string;
  tipo: string = "injecao";
  tiposServicos: any[] = [
    {
      label: 'Injeção Eletrônica',
      value: 'Injeção Eletrônica',
    },{
      label: 'Multimídia',
      value: 'Multimídia',
    },{
      label: 'Motor',
      value: 'Motor',
    },{
      label: 'Suspensão',
      value: 'Suspensão',
    },{
      label: 'Troca de Óleo',
      value: 'Troca de Óleo',
    }];

    modal: ActionModal = {
      showModal: false,
      mensagem: '',
      detalhes: '',
      alerta: '',
      cancelar: 'Cancelar',
      continuar: 'Continuar',
    };
  fornecedor: FornecedoresRequest;

  constructor(
    private service: FornecedoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  alterarTipo(tipo:any) {
    this.tipo = tipo.value;
  }

  prepararFornecedor() {
        this.fornecedor = {
          nome: this.nome,
          cnpj: this.cnpj,
          telefone: this.telefone,
          tipoServico: this.tipo
        };
        this.confirmarCadastro();
    }

    confirmarCadastro() {
      this.modal = {
        showModal: true,
        mensagem: 'Deseja cadastra o fornecedor',
        detalhes:
          'Caso queira confirmar o cadastro do fornecedor basta clicar em Cadastrar.',
        alerta: '',
        cancelar: 'Cancelar',
        continuar: 'Cadastrar',
      };
    }

    continuar(valor: string) {
      this.salvarFornecedor();
      this.modal.showModal = false;
    }

    salvarFornecedor() {
      this.service.salvarFornecedor(this.fornecedor).subscribe({
        next: () => {
          this.router.navigate(['/busca-fornecedores'], {
          });
        },
        error: () => { },
      });
    }
}
