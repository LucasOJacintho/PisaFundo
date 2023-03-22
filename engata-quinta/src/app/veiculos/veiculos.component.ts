import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../models/veiculo.model';
import { VeiculosService } from './veiculos.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  veiculos: Veiculo[] = []

  constructor(
    private service : VeiculosService
  ) {};

  ngOnInit(): void {
    this.findAllVeiculos()
  }

  findAllVeiculos() {
    this.service.getAllVeiculos().subscribe(veiculos => {
      this.veiculos = veiculos;
    })
  }

}
