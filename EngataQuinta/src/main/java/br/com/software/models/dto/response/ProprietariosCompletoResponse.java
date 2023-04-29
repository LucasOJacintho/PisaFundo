package br.com.software.models.dto.response;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.software.entities.Proprietarios;
import lombok.Data;

@Data
public class ProprietariosCompletoResponse {

	private String nome;

	private String cnpj;

	private String cpf;

	private Date aniversario;

	private List<VeiculosResponse> veiculos = new ArrayList<>();

	public ProprietariosCompletoResponse(Proprietarios proprietario) {
		this.setAniversario(proprietario.getAniversario());
		this.setCpf(proprietario.getCpf());
		this.setNome(proprietario.getNome());
		this.setCnpj(proprietario.getCnpj());
		List<VeiculosResponse> veiculosResponse = new ArrayList<>();
		proprietario.getVeiculos().forEach(veiculo ->
		veiculosResponse.add(new VeiculosResponse(veiculo)));
		this.setVeiculos(veiculosResponse);
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

	public List<VeiculosResponse> getVeiculos() {
		return veiculos;
	}

	public void setVeiculos(List<VeiculosResponse> veiculos) {
		this.veiculos = veiculos;
	}
}
