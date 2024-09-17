import { Fornecedores } from './../../models/fornecedores.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { ProprietarioService } from 'src/app/proprietarios/proprietarios.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.scss'],
})
export class HeaderComponent {
  veiculos: boolean = false;
  proprietarios: boolean = false;
  fornecedores: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private proprrietarioService: ProprietarioService,
    public loginService: LoginService,
  ) {}

  navegacao(valor: string) {
    switch (valor) {
      case 'buscar-veiculos':
        this.router.navigate(['/busca-veiculos'], {
          relativeTo: this.activatedRoute,
        });
        break;

      case 'cadastrar-veiculos':
        this.router.navigate(['/cadastro-veiculos'], {
          relativeTo: this.activatedRoute,
        });
        this.proprrietarioService.cadastrarVeiculo = false;
        this.proprietarios = null;
        break;

      case 'cadastrar-proprietarios':
        this.router.navigate(['/cadastro-proprietarios'], {
          relativeTo: this.activatedRoute,
        });
        break;

      case 'buscar-proprietarios':
        this.router.navigate(['/busca-proprietarios'], {
          relativeTo: this.activatedRoute,
        });
        break;

      case 'cadastrar-fornecedores':
        this.router.navigate(['/cadastro-fornecedores'], {
          relativeTo: this.activatedRoute,
        });
        break;

      case 'buscar-fornecedores':
        this.router.navigate(['/busca-fornecedores'], {
          relativeTo: this.activatedRoute,
        });
        break;
    }
  }

  sair() {
    this.loginService.acessoPermitido = false;
    this.loginService.tipoAcesso = null
    this.router.navigate(['/login'], { relativeTo: this.activatedRoute });
  }
}
