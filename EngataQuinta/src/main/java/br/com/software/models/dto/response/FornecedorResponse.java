package br.com.software.models.dto.response;

import java.util.ArrayList;
import java.util.List;

import br.com.software.entities.Fornecedores;
import br.com.software.entities.Manutencao;
import lombok.Data;

@Data
public class FornecedorResponse {
	
	private Integer id;
	
	private String nome;
	
	private String cnpj;
	
	private String telefone;
	
	private String tipoServico;
	
	private List<ManutencaoResponse> manutencoes;

	public FornecedorResponse(Fornecedores fornecedor, List<Manutencao> manutencoes) {
		this.setId(fornecedor.getId());
		this.setNome(fornecedor.getNome());
		this.setCnpj(fornecedor.getCnpj());
		this.setTelefone(fornecedor.getTelefone());
		this.setTipoServico(fornecedor.getTipoServico());
		this.setManutencoes(manutencoes);
	}

	
	public FornecedorResponse(Fornecedores fornecedor) {
		this.setId(fornecedor.getId());
		this.setNome(fornecedor.getNome());
		this.setCnpj(fornecedor.getCnpj());
		this.setTelefone(fornecedor.getTelefone());
		this.setTipoServico(fornecedor.getTipoServico());
		this.setManutencoes(fornecedor.getManutencao());
		}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getTipoServico() {
		return tipoServico;
	}

	public void setTipoServico(String tipoServico) {
		this.tipoServico = tipoServico;
	}

	public List<ManutencaoResponse> getManutencoes() {
		return manutencoes;
	}

	public void setManutencoes(List<Manutencao> manutencoes) {
		List<ManutencaoResponse> manutencoesResponse = new ArrayList<>();
			for (Manutencao manutencao : manutencoes) {
				manutencoesResponse.add(new ManutencaoResponse(manutencao));
			}
			this.manutencoes = manutencoesResponse;	
	}
	
}
