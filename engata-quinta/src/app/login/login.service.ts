import { Injectable } from '@angular/core';
import { DataResponse } from '../models/dataResponse';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  Fornecedores,
  FornecedoresRequest,
} from '../models/fornecedores.model';
import { Manutencao, ManutencaoRequest } from '../models/manutencao';
import { login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  acessoPermitido: boolean = false;
  tipoAcesso: string

  constructor(private httpClient: HttpClient) { }

  mainUrl = 'http://192.168.1.11:8080/login';

  login(username:string, senha: string): Observable<login> {
    return this.httpClient
      .post(this.mainUrl, {username, senha})
      .pipe(map((res) => res as login));
  }
}
