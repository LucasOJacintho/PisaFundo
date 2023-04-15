import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo, VeiculoRequest } from 'src/app/models/veiculo.model';
import { VeiculosService } from '../veiculos.service';
import { ActionModal } from 'src/app/shared/action-modal/actionModal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private service: VeiculosService, private router: Router) {}

  ngOnInit(): void {
    this.modelo = this.service.modeloPesquisada === undefined ? "" : this.service.modeloPesquisada;
    this.chassi = this.service.chassiPesquisada === undefined ? "" : this.service.chassiPesquisada;
  }

  prepararVeiculo() {
      this.veiculo = {
        placa: this.service.placa.join(''),
        ano: this.ano,
        modelo: this.modelo,
        chassi: this.chassi,
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
        this.findAllVeiculos();
      },
      error: () => {},
    });
  }

  findAllVeiculos() {
    this.service.getAllVeiculos().subscribe((response) => {
      this.service.veiculo = response.object;
    });
  }
}
