import { Proprietarios } from './../../models/proprietarios.model';
import { map } from 'rxjs';
import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FornecedoresService } from 'src/app/fornecedores/fornecedores.service';
import { ProprietarioService } from 'src/app/proprietarios/proprietarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss', '../../app.component.scss']
})
export class TelaLoginComponent {

  userName: string;
  senha: string;
  alerta: boolean = false;

  tiposAcessos: any[] = [
    {
      label: 'Administrador',
      value: 'Administrador',
    },{
      label: 'Proprietário',
      value: 'Proprietário',
    },{
      label: 'Fornecedor',
      value: 'Fornecedor',
    }
  ];
  tipoSelecionado: string = "Administrador";
  proprietario: Proprietarios;

  constructor (
    private router: Router,
    private service : LoginService,
    private fornecedorService : FornecedoresService,
    private proprietarioService : ProprietarioService) {

  }

  acesso() {
    let username = this.userName;
    let senha = this.senha;
    this.userName = "";
    this.senha = "";
    if(this.tipoSelecionado === "Administrador") {
      this.service.tipoAcesso = this.tipoSelecionado;
      this.service.acessoPermitido = true;
      this.router.navigate(['/busca-veiculos']);
      /*this.service.login(username, senha).subscribe(result => {
        if(result.acessoValido) {
          this.service.tipoAcesso =  this.tipoSelecionado;
          this.service.acessoPermitido = result.acessoValido;
        }
        else {
          this.alerta = true;
        }
      })*/
    } else if (this.tipoSelecionado === "Proprietário") {
      this.proprietarioService.login(username, senha).subscribe(result => {
        if(result.object !== null) {
          this.service.tipoAcesso =  this.tipoSelecionado;
          this.service.acessoPermitido = true;
          this.proprietarioService.proprietario = result.object
          this.proprietarioService.veiculos = result.object.veiculos
          this.router.navigate(['/resultados-proprietarios']);
        }
        else {
          this.alerta = true;
        }
      })
    } else if (this.tipoSelecionado === "Fornecedor") {
      this.fornecedorService.login(username, senha).subscribe(result => {
        if(result.object !== null) {
          this.service.tipoAcesso =  this.tipoSelecionado;
          this.service.acessoPermitido = true;
          this.fornecedorService.fornecedorSelecionado = result.object;
          this.router.navigate(['/detalhe-fornecedor']);
        }
        else {
          this.alerta = true;
        }
      })
    }
  }

  alterarTipo(tipo:any) {
    this.tipoSelecionado = tipo.value;
  }
}
