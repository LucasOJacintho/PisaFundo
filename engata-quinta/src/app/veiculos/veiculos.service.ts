import { Veiculo } from './../models/veiculo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take, takeUntil } from 'rxjs';
import { Response } from '../models/dataResponse';

@Injectable({
  providedIn: 'root',
})



export class VeiculosService {

  veiculo: Veiculo[] = [];
  placaNova: boolean |undefined;
  objeto: any = {
    valor: undefined,
    pesquisa: undefined,
  };
  
  mainUrl = '*/veiculos'

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  getAllVeiculos(): Observable<Response> {
    return this.httpClient.get(this.mainUrl)
        .pipe(
          map(res => res as Response)
          );
  }

  findVeiculo(objeto: any): Observable<Response> {
    return this.httpClient.post(this.mainUrl, objeto)
        .pipe(map(res => res as Response));
  }

  salvarVeiculos(veiculo: Veiculo) : Observable<Response> {
    return this.httpClient.post(this.mainUrl, veiculo)
    .pipe(map(res => res as Response))
  }
}
