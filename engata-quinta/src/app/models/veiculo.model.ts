import { Manutencao } from "./manutencao";

export interface Veiculo {
    id: Number;
    placa: String;
    chassi: String;
    ano: Number;
    modelo: String;
    manutencoes:Manutencao[]
}

export interface VeiculoRequest {
    placa: String;
    chassi: String;
    ano: Number;
    modelo: String;
    veiculos_proprietarios: string;
}

