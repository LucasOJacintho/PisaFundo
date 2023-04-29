package br.com.software.models.dto.request;

import org.hibernate.validator.constraints.Length;

import br.com.software.entities.Proprietarios;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class VeiculoRequest {

	@NotBlank
	@Length(max = 30)
	private String modelo;

	@NotBlank
	@Length(min = 7, max = 7)
	private String placa;
	
	@NotBlank
	@Length(max = 17)
	private String chassi;

	@Min(1950)
	@Max(2023)
	@NotNull
	private int ano;
	
	@NotNull
	private int veiculos_proprietarios;
	
	//private Proprietarios proprietario;
	
	public int getVeiculos_proprietarios() {
		return veiculos_proprietarios;
	}

	public void setVeiculos_proprietarios(int veiculos_proprietarios) {
	this.veiculos_proprietarios = veiculos_proprietarios;
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

	//public Proprietarios getProprietario() {
	//	return proprietario;
	//}

	//public void setProprietario(Proprietarios proprietario) {
	//	this.proprietario = proprietario;
	//}

}
