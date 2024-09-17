import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TelaLoginComponent } from './login/tela-login/tela-login.component';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'engata-quinta';
  login: boolean = false;
  tipoAcesso: string;

  constructor(private router: Router,
    public loginService: LoginService) {}

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.login = this.loginService.acessoPermitido;
      this.tipoAcesso = this.loginService.tipoAcesso;
  }
}
