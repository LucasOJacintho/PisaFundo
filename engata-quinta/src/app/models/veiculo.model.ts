import { Manutencao } from "./manutencao";
import { Proprietarios } from "./proprietarios.model";

export interface Veiculo {
    id: Number;
    placa: String;
    chassi: String;
    ano: Number;
    modelo: String;
    manutencoes:Manutencao[]
    proprietario: Proprietarios
}

export interface VeiculoRequest {
    placa: String;
    chassi: String;
    ano: Number;
    modelo: String;
    veiculos_proprietarios: string;
}

