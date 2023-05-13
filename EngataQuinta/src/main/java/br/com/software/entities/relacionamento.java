package br.com.software.entities;

import java.io.Serializable;

public class relacionamento implements Serializable {
	
	private int id_veiculos;
	
	private int id_fornecedor;
	
	public relacionamento(int id_veiculos, int id_fornecedor) {
		this.setId_fornecedor(id_fornecedor);
		this.setId_veiculos(id_veiculos);
	}

	public int getId_veiculos() {
		return id_veiculos;
	}

	public void setId_veiculos(int id_veiculo) {
		this.id_veiculos = id_veiculo;
	}

	public int getId_fornecedor() {
		return id_fornecedor;
	}

	public void setId_fornecedor(int id_forncedor) {
		this.id_fornecedor = id_forncedor;
	}

	
}
