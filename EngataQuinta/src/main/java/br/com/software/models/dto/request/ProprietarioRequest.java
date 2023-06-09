package br.com.software.models.dto.request;

import java.util.Date;

import lombok.Data;

@Data
public class ProprietarioRequest {

	private String nome;

	private String cnpj;
	
	private String cpf;
	
	private Date aniversario;
	
	private Integer veiculos_proprietarios;


	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Date getAniversario() {
		return aniversario;
	}

	public void setAniversario(Date aniversario) {
		this.aniversario = aniversario;
	}

	public Integer getVeiculos_proprietarios() {
		return veiculos_proprietarios;
	}

	public void setVeiculos_proprietarios(Integer veiculos_proprietarios) {
		this.veiculos_proprietarios = veiculos_proprietarios;
	}
}
