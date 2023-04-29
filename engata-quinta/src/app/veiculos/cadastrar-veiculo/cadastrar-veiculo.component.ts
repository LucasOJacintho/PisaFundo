import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo, VeiculoRequest } from 'src/app/models/veiculo.model';
import { VeiculosService } from '../veiculos.service';
import { ActionModal } from 'src/app/shared/action-modal/actionModal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProprietarioService } from 'src/app/proprietarios/proprietarios.service';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.scss', '../../app.component.scss'],
})
export class CadastrarVeiculoComponent implements OnInit {

  veiculos: Veiculo[] = [];
  veiculo!: VeiculoRequest;
  placa!: string;
  ano!: number;
  modelo!: string;
  chassi!: string;
  tela = 'Veiculos';
  modal: ActionModal = {
    showModal: false,
    mensagem: '',
    detalhes: '',
    alerta: '',
    cancelar: 'Cancelar',
    continuar: 'Continuar',
  };
  validadeDados: string | undefined;
  cadastroForm = new FormGroup({
    ano: new FormControl(1950, [Validators.required, Validators.min(1950), Validators.max(2023), Validators.minLength(4),Validators.maxLength(4)]),
    chassi: new FormControl(null, [
      Validators.required, Validators.minLength(17),Validators.maxLength(17)
    ]),
    modelo: new FormControl(null, [Validators.required]),
  });
  documentoSelecionado: boolean = false;
  cpf: string;
  cnpj: string;
  cadastrarVeiculo: boolean = false;
  resetPlaca: boolean = false;

  constructor(private service: VeiculosService, 
    private router: Router,
    private proprietarioService: ProprietarioService) {}

  ngOnInit(): void {
    this.cadastrarVeiculo = this.proprietarioService.cadastrarVeiculo
    if(this.cadastrarVeiculo) {
      this.cpf = this.proprietarioService.proprietario.cpf;
      this.cnpj = this.proprietarioService.proprietario.cnpj;
    } else {
      this.proprietarioService.proprietario = null
    }
    this.modelo = this.service.modeloPesquisada === undefined ? "" : this.service.modeloPesquisada;
    this.chassi = this.service.chassiPesquisada === undefined ? "" : this.service.chassiPesquisada;
  }

  validarDocumento() {
    let documento : string;
    if(!this.documentoSelecionado && this.cpf.length===11) {
      documento = this.cpf;
    } else if ( this.documentoSelecionado && this.cnpj.length===14){
      documento = this.cnpj;
    }
    this.proprietarioService.validarDocumento(documento).subscribe({
      next: (response) => {
          if(response.message === "Proprietário não localizado!") {
            this.cadastrarProprietario();
          } else this.prepararVeiculo(response.object.toString());
      },
      error: () => {},
    });
  }

  cadastrarProprietario() {
     this.modal = {
      showModal: true,
      mensagem: 'Documento não localizado',
      detalhes:
        'Não foi possível localizar proprietário em nossa base de dados. Para adicionar basta clicar em CADASTRAR',
      alerta: 'Cliclando em cadatrar você será redirecionado para a tela de cadastro de proprietário',
      cancelar: 'Cancelar',
      continuar: 'Cadastrar',
    };
  }

  cadastrarNovoProprietario($event: string) {

    this.proprietarioService.cnpjPesquisado = this.cnpj === undefined ? '' : this.cnpj;
    this.proprietarioService.cpfPesquisado =this.cpf === undefined ? '' : this.cpf;
    this.router.navigate(['/cadastro-proprietarios'], {
    });
    }

  prepararVeiculo(value:string) {
      this.veiculo = {
        placa: this.service.placa.join(''),
        ano: this.ano,
        modelo: this.modelo,
        chassi: this.chassi,
        veiculos_proprietarios: value
      };
    this.confirmarCadastro();
  }


  confirmarCadastro() {
    this.modal = {
      showModal: true,
      mensagem: 'Deseja cadastra o veiculo',
      detalhes:
        'Caso queira confirmar o cadastro do veículo basta clicar em Cadastrar.',
      alerta: '',
      cancelar: 'Cancelar',
      continuar: 'Cadastrar',
    };
  }

  continuar(valor: string) {
    this.salvarVeiculo()
    this.modal.showModal = false;
  }
  
  salvarVeiculo() {
    this.service.salvarVeiculos(this.veiculo).subscribe({
      next: () => {
        this.modelo = null;
        this.ano = null;
        this.cnpj = null;
        this.cpf = null;
        this.chassi = null;
        this.service.resetarPlaca = true;
        this.resetPlaca = true
        if(!this.proprietarioService.telaResultados){
          this.router.navigate(['/busca-proprietarios'], {
          });
        } else {
          this.proprietarioService.cadastroRealizado = true;
        }
        
      },
      error: () => {},
    });
  }

  findAllVeiculos() {
    this.service.getAllVeiculos().subscribe((response) => {
      this.service.veiculo = response.object;
    });
  }

  documento(value: boolean) {
    this.documentoSelecionado = value;
  }
}
