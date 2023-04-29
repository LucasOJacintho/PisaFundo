import { ActionModal } from 'src/app/shared/action-modal/actionModal';
import { Proprietarios } from './../../models/proprietarios.model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProprietarioService } from '../proprietarios.service';

@Component({
  selector: 'app-buscar-proprietarios',
  templateUrl: './buscar-proprietarios.component.html',
  styleUrls: ['./buscar-proprietarios.component.scss']
})
export class BuscarProprietariosComponent {
  proprietarios: Proprietarios[] = []
  proprietario: Proprietarios
  placa!: string;
  ano!: number;
  modelo!: string;
  tela = 'Proprietário';
  propriedades: any[] = [
    {
      label: 'CPF',
      value: 'cpf',
      mensagem:
        'O CPF deve composto de 11 caracteres, sem espaçoes e caracters especiais',
      preenchimento: 'Insira o CPF do proprietário',
      validador: 11,
      regex: /\W|_/,
    },
    {
      label: 'CNPJ',
      value: 'cnpj',
      mensagem:
      'O CNPJ deve composto de 14 caracteres, sem espaçoes e caracters especiais',
      preenchimento: 'Insira o CNPJ do proprietário',
      validador: 14,
      regex: /\W|_/,
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
    private service: ProprietarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.localizarProprietarios();
    this.service.telaResultados = false;
  }

  localizarProprietarios() {
    this.service.pegarTodosProprietarios().subscribe((response) => {
      this.proprietarios = response.object;
    });
  }

  localizarProprietario(objeto: any) {
    if(objeto.propriedade === "cpf") this.service.cpfPesquisado = objeto.valor;
    else this.service.cnpjPesquisado = objeto.valor

    this.service.localizarProprietario(objeto).subscribe((response) => {
      
      if (response.object !== null) {
        this.proprietario = response.object[0];
        this.service.veiculos = this.proprietario.veiculos
        this.service.proprietario = response.object[0];
        this.service.cnpjPesquisado=null;
        this.service.cpfPesquisado=null;
        this.service.telaResultados = true;
        this.router.navigate(['/resultados-proprietarios'], {
          relativeTo: this.activatedRoute,
        });
      } else this.proprietarioInexistente();
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

  proprietarioInexistente() {
    this.modal = {
      showModal: true,
      mensagem: 'Não existe propritário cadastrado com o valor procurado.',
      detalhes: 'Caso queira adicionar o proprietario basta clicar em ADICIONAR.',
      alerta:
        'Ao clicar em Adicionar você será redirecionado para a página de cadastro de proprietários.',
      cancelar: 'Cancelar',
      continuar: 'Adicionar',
    };
  }

  continuar(valor: string) {
    this.service.cadastrarProprietario = true
    this.router.navigate(['/cadastro-proprietarios'], { relativeTo: this.activatedRoute });
  }
}
