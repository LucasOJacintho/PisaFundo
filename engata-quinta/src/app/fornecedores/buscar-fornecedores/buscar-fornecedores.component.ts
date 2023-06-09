import { Component, OnChanges, SimpleChanges, forwardRef } from '@angular/core';
import { ActionModal } from 'src/app/shared/action-modal/actionModal';
import { FornecedoresService } from '../fornecedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-buscar-fornecedores',
  templateUrl: './buscar-fornecedores.component.html',
  styleUrls: ['./buscar-fornecedores.component.scss','../../app.component.scss'],
})
export class BuscarFornecedoresComponent implements OnChanges {


  tela = "Fornecedores";
  propriedades: any[] = [
    {
      label: '',
      value: '',
      mensagem:
      'O CNPJ deve composto de 14 caracteres, sem espaçoes e caracters especiais',
      preenchimento: 'Insira o CNPJ do fornecedor',
      validador: 14,
      regex: /\W|_/,
    },
  ];

  tipo: string = "Injeção Eletrônica";
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

  constructor(
    private service: FornecedoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
  }

  localizarFornecedor(objeto: any) {
    this.service.pesquisaPorTipo = false;
    this.service.localizarFornecedor(objeto).subscribe((response) => {
      if (response.object !== null) {
        this.service.fornecedores = response.object;
        this.router.navigate(['/resultados-fornecedores'], {
          relativeTo: this.activatedRoute,
        });
      } else this.fornecedorInexistente();
    });
  }

  alterarTipo(tipo:any) {
    this.tipo = tipo.value;
  }

  pesquisarPorTipo(){
    this.service.pesquisaPorTipo = true;
    this.service.tipoPesquisado = this.tipo;

    let objeto = {
      valor: this.tipo,
      propriedade: "tipo"
    }

    this.service.localizarFornecedor(objeto).subscribe((response) => {
      if (response.object !== null) {
        this.service.fornecedores = response.object;
        this.router.navigate(['/resultados-fornecedores'], {
          relativeTo: this.activatedRoute,
        });
      } else this.fornecedorInexistente();
    });

  }

  fornecedorInexistente() {
    this.modal = {
      showModal: true,
      mensagem: 'Fornecedor não localizado na base de dados',
      detalhes: 'Favor realizar a busca novamente com um valor válido',
      alerta: '',
      cancelar: 'Continuar',
      continuar: '',
    };
  }
}
