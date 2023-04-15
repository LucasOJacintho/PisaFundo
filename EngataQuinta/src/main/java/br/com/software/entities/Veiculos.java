package br.com.software.entities;

import br.com.software.models.dto.request.VeiculoRequest;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@RequiredArgsConstructor
@Entity
@Table(name="veiculos")
public class Veiculos {

	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="modelo", length=50, nullable = false)
	private String modelo;
	
	@Column(name="placa", length=7, nullable = false)
	private String placa;
	
	@Column(name="chassi", length=17, nullable = false)
	private String chassi;

	@Column(name="ano", nullable = false)
	private int ano;
	

	public Veiculos(VeiculoRequest request) {
		this.setAno(request.getAno());
		this.setChassi(request.getChassi());
		this.setModelo(request.getModelo());
		this.setPlaca(request.getPlaca());
	}
	
	public Veiculos() {

	}

	public int getId() {	
		return id;
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

	public void setId(int id) {
		this.id = id;
	}
	
	public String getChassi() {
		return chassi;
	}

	public void setChassi(String chassi) {
		this.chassi = chassi;
	}

	
	
}
