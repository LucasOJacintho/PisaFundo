export interface Veiculo {
    id: Number;
    placa: String;
    chassi: String;
    ano: Number;
    modelo: String;
}

export interface VeiculoRequest {
    placa: String;
    chassi: String;
    ano: Number;
    modelo: String;
}

