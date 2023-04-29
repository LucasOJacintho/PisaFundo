package br.com.software.models.dto.response;

import java.util.Date;

import br.com.software.entities.Proprietarios;
import lombok.Data;

@Data
public class ProprietariosResponse {
	
	private String nome;

	private String cnpj;
	
	private String cpf;
	
	private Date aniversario;

	public ProprietariosResponse(Proprietarios proprietario) {
		this.setAniversario(proprietario.getAniversario());
		this.setCpf(proprietario.getCpf());
		this.setNome(proprietario.getNome());
		this.setCnpj(proprietario.getCnpj());
	}

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

}
