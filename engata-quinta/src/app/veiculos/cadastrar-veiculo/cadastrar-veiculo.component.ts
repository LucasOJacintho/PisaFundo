import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo.model';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.scss','../../app.component.scss'],
})
export class CadastrarVeiculoComponent {
  veiculos: Veiculo[] = [];
  veiculo!: Veiculo;
  placa!: string;
  ano!: number;
  modelo!: string;
  chassi: string | undefined;
  tela = 'Veiculos';

  constructor(private service: VeiculosService, private router: Router) {}

  salvarVeiculo() {
    //Salvar Veiculos deveria primeiramente validar no banco se essas informações (Placa e Chassis) são únicas
    //Caso não deveria devolver uma mensagem de erro para o front tratar (Denunciar, Corrigir)

    this.veiculo = {
      placa: this.placa,
      ano: this.ano,
      modelo: this.modelo,
      id: ++this.veiculos.length,
    };
    this.service.salvarVeiculos(this.veiculo).subscribe();
    this.findAllVeiculos();
  }

  findAllVeiculos() {
    this.service.getAllVeiculos().subscribe((response) => {
      this.veiculos = response.object;
    });
  }
}
