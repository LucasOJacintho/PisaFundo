import { Veiculo, VeiculoRequest } from './../models/veiculo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take, takeUntil } from 'rxjs';
import { DataResponse } from '../models/dataResponse';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  veiculo: Veiculo[] = [];
  placa: string[] = [];
  placaNova: boolean | undefined;
  pesquisa: any = {
    valor: undefined,
    pesquisa: undefined,
  };
  placaPesquisada: string | undefined;
  chassiPesquisada: string | undefined;
  modeloPesquisada: string | undefined;

  mainUrl = 'http://localhost:8081/veiculos';
  resetarPlaca: boolean = false;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllVeiculos(): Observable<DataResponse> {
    return this.httpClient
      .get(this.mainUrl)
      .pipe(map((res) => res as DataResponse));
  }

  findVeiculo(objeto: any): Observable<DataResponse> {
    return this.httpClient
      .post(this.mainUrl, objeto)
      .pipe(map((res) => res as DataResponse));
  }

  salvarVeiculos(veiculo: VeiculoRequest): Observable<DataResponse> {
    return this.httpClient
      .post(this.mainUrl + '/cadastrar', veiculo)
      .pipe(map((res) => res as DataResponse));
  }

  validarPlaca(): boolean | undefined {
    if (
      this.placaPesquisada !== null &&
      this.placaPesquisada !== undefined &&
      this.placaPesquisada !== ''
    ) {
      let valorAnalizável = this.placaPesquisada.substring(2, 3);
      let tryNumber: number = parseInt(valorAnalizável);
      if (Number.isNaN(tryNumber)) {
        this.placaNova = false;
      } else {
        this.placaNova = true;
      }
    }
    return this.placaNova;
  }
}
