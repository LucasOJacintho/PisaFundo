import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take, takeUntil } from 'rxjs';
import { DataResponse, DataResponseProprietario } from 'src/app/models/dataResponse';
import { Proprietarios, ProprietariosRequest } from 'src/app/models/proprietarios.model';

@Injectable({
  providedIn: 'root',
})
export class ProprietarioService {


  proprietarios: Proprietarios[] = [];

  mainUrl = 'http://192.168.1.11:8080/proprietarios';
  cpfPesquisado: any;
  cnpjPesquisado: any;
  proprietario: Proprietarios;
  cadastrarVeiculo: boolean = false;
  telaResultados: any;
  cadastroRealizado: boolean;
  cadastrarProprietario: boolean;
  veiculos: any;
  telaDeDetalhes: boolean;
  idVeiculo: any;

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  pegarTodosProprietarios(): Observable<DataResponse> {
    return this.httpClient
      .get(this.mainUrl)
      .pipe(map((res) => res as DataResponse));
  }

  localizarProprietario(objeto: any): Observable<DataResponse> {
    return this.httpClient
      .post(this.mainUrl, objeto)
      .pipe(map((res) => res as DataResponse));
  }

  localizarProprietarioPeloIdVeiculo(id: Number): Observable<DataResponse> {
    return this.httpClient
    .post(this.mainUrl+"/id", id)
    .pipe(map((res) => res as DataResponse));
  }

  login(username: string, senha: string): Observable<DataResponseProprietario> {
    return this.httpClient
    .post(this.mainUrl + '/login', {username, senha})
    .pipe(map((res) => res as DataResponseProprietario));
  }

  validarDocumento(value: string) : Observable<DataResponse> {
    return this.httpClient
      .post(this.mainUrl + '/documento?documento=' + value, null)
      .pipe(map((res) => res as DataResponse));
  }

  salvarProprietarios(proprietario: ProprietariosRequest): Observable<DataResponse> {
    return this.httpClient
      .post(this.mainUrl + '/cadastrar', proprietario)
      .pipe(map((res) => res as DataResponse));
  }

}
