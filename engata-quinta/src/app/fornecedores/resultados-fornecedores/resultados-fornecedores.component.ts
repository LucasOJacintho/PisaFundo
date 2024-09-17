import { Component } from '@angular/core';
import { FornecedoresService } from '../fornecedores.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fornecedores } from 'src/app/models/fornecedores.model';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-resultados-fornecedores',
  templateUrl: './resultados-fornecedores.component.html',
  styleUrls: ['./resultados-fornecedores.component.scss', '../../app.component.scss']
})
export class ResultadosFornecedoresComponent {

  tabela: string[] = ["NOME", "CNPJ", "TELEFONE"]

  constructor(
    public service: FornecedoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ) {}

  detalheObjeto(objeto: Fornecedores) {
    this.service.fornecedorSelecionado = objeto
    this.router.navigate(['/detalhe-fornecedor'], {
    });
  }


}
