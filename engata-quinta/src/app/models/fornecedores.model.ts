import { Manutencao } from "./manutencao";

export interface Fornecedores {
    id: number;
    nome:string
    cnpj: string;
    telefone: string;
    tipoServico: string;
    manutencoes: Manutencao[]
}

export interface FornecedoresRequest {
    nome: string;
    cnpj: string;
    telefone: string;
    tipoServico: string;
}
