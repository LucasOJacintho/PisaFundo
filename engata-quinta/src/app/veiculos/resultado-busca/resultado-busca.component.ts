import { Veiculo } from './../../models/veiculo.model';
import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../veiculos.service';

@Component({
  selector: 'app-resultado-busca',
  templateUrl: './resultado-busca.component.html',
  styleUrls: ['./resultado-busca.component.scss']
})
export class ResultadoBuscaComponent implements OnInit{

  objeto: any | undefined
  veiculo: Veiculo[] = [];

  constructor( private service:VeiculosService) { }

  ngOnInit(): void {
    this.objeto = this.service.objeto
  }

}
