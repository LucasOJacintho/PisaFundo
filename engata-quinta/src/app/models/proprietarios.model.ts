import { Veiculo } from "./veiculo.model";

export interface Proprietarios {
    id: Number;
    nome:string
    cpf: string;
    cnpj: string;
    aniversario: Date;
    veiculos: Veiculo[]
}

export interface ProprietariosRequest {
    nome: string;
    cpf: string;
    cnpj: string;
    aniversario: Date;
}