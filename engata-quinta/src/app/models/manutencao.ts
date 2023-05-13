export interface Manutencao {
  proprietario: string;
  modeloVeiculo:string
  placaVeiculo: string;
  fornecedor: string;
  telefoneFornecedor: string;
  servico: string
  dataServico: Date
  concluido: boolean
}

export interface ManutencaoRequest {
  id_veiculo: number;
  id_fornecedor: number;
  servico: string;
  concluido: boolean;
}

export interface ManutencaoEdit {
  id_veiculo: number;
  id_fornecedor: number;
  concluido: boolean;
}
