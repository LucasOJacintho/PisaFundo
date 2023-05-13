import { Injectable } from '@angular/core';
import { DataResponse } from '../models/dataResponse';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  Fornecedores,
  FornecedoresRequest,
} from '../models/fornecedores.model';
import { Manutencao, ManutencaoRequest } from '../models/manutencao';

@Injectable({
  providedIn: 'root',
})
export class FornecedoresService {
  fornecedores: any[];
  pesquisaPorTipo: boolean;
  tipoPesquisado: string;
  fornecedorSelecionado: Fornecedores;

  constructor(private httpClient: HttpClient) { }

  mainUrl = 'http://192.168.1.10:8080/fornecedores';

  manutencoesUrl = 'http://192.168.1.10:8080/manutencoes';

  localizarFornecedor(objeto: any): Observable<DataResponse> {
    return this.httpClient
      .post(this.mainUrl, objeto)
      .pipe(map((res) => res as DataResponse));
  }

  localizarFornecedorPorTipo(tipo: string): Observable<DataResponse> {
    return this.httpClient
      .post(this.mainUrl, tipo)
      .pipe(map((res) => res as DataResponse));
  }

  salvarFornecedor(fornecedor: FornecedoresRequest): Observable<DataResponse> {
    return this.httpClient
      .post(this.mainUrl + '/cadastrar', fornecedor)
      .pipe(map((res) => res as DataResponse));
  }

  cadastrarManutencao(
    novaManutencao: ManutencaoRequest): Observable<DataResponse> {
    return this.httpClient
      .post(this.manutencoesUrl + '/cadastrar', novaManutencao)
      .pipe(map((res) => res as DataResponse));
  }

  buscarManutencoesPorFornecedorId(id: number): Observable<Manutencao[]> {
    return this.httpClient
      .get(this.manutencoesUrl + '/buscar_fornecedor_id?id=' + id)
      .pipe(map((res) => res as Manutencao[]));
  }
}
