import { Fornecedores } from "./fornecedores.model";
import { Proprietarios } from "./proprietarios.model";

export interface DataResponse {
    message: String;
    object: any[];
}


export interface DataResponseProprietario {
  message: String;
  object: Proprietarios;
}

export interface DataResponseFornecedor {
  message: String;
  object: Fornecedores;
}
