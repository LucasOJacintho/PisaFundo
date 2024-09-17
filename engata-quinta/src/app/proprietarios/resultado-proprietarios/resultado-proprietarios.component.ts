import { ProprietarioService } from 'src/app/proprietarios/proprietarios.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Proprietarios } from 'src/app/models/proprietarios.model';
import { Veiculo } from 'src/app/models/veiculo.model';
import { VeiculosService } from 'src/app/veiculos/veiculos.service';
import { LoginService } from 'src/app/login/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado-proprietarios',
  templateUrl: './resultado-proprietarios.component.html',
  styleUrls: ['./resultado-proprietarios.component.scss','../../app.component.scss']
})
export class ResultadoProprietariosComponent implements OnInit,OnChanges  {

  pesquisa: any | undefined;
  proprietario: Proprietarios;
  documento: string
  veiculos: Veiculo[] = [];
  tabela: string[] = ["MODELO", "ANO", "PLACA", "CHASSI"]
  objetos: any[] = []
  telaDeDetalhes: boolean = false;

  constructor( public service:ProprietarioService,
    public veiculoService: VeiculosService,
    public loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.proprietario = this.service.proprietario;
    this.documento = this.proprietario.cpf?.trim() === "" ? this.proprietario.cnpj : this.proprietario.cpf;
    this.service.telaResultados = true;
    this.service.cadastrarVeiculo = false
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.service.telaResultados = true;
    this.service.cadastroRealizado;
    this.localizarProprietario()
  }

  mudarTela() {
    this.service.cadastrarVeiculo = true;
  }

  localizarProprietario() {
    let objeto = {
      propriedade: "",
      valor: this.documento
    }
    this.service.localizarProprietario(objeto).subscribe((response) => {
      this.objetos = this.veiculos = response.object[0].veiculos;
    })
  }

  detalheObjeto(objeto: any) {
    this.veiculoService.veiculoDetalhe = objeto;
    this.service.idVeiculo = objeto.id;
    this.telaDeDetalhes = true;
    this.service.telaDeDetalhes = true;
  }

  sair() {
    this.loginService.acessoPermitido = false;
    this.loginService.tipoAcesso = null
    this.router.navigate(['/login'], { relativeTo: this.activatedRoute });
  }
}
