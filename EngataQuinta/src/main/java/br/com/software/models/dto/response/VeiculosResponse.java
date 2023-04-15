package br.com.software.models.dto.response;

import br.com.software.entities.Veiculos;
import lombok.Data;
import lombok.RequiredArgsConstructor;


@Data
@RequiredArgsConstructor
public class VeiculosResponse {
	
	private int id;

	private String modelo;

	private String placa;
	
	private String chassi;

	private int ano;
	

	public VeiculosResponse(Veiculos veiculo) {
		this.setId(veiculo.getId());
		this.setPlaca(veiculo.getPlaca());
		this.setChassi(veiculo.getChassi());
		this.setModelo(veiculo.getModelo());
		this.setAno(veiculo.getAno());

	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getModelo() {
		return modelo;
	}


	public void setModelo(String modelo) {
		this.modelo = modelo;
	}


	public String getPlaca() {
		return placa;
	}


	public void setPlaca(String placa) {
		this.placa = placa;
	}


	public int getAno() {
		return ano;
	}


	public void setAno(int ano) {
		this.ano = ano;
	}


	public String getChassi() {
		return chassi;
	}


	public void setChassi(String chassi) {
		this.chassi = chassi;
	}



}
