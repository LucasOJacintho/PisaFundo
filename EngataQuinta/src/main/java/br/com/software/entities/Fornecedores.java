package br.com.software.entities;

import java.util.ArrayList;
import java.util.List;

import br.com.software.models.dto.request.FornecedorRequest;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name="fornecedor")
public class Fornecedores {
	
	@Id
	@Column(name = "id")
	private int id;
	
	@NotBlank
	@Column(name = "nome")
	private String nome;

	@Column (name = "cnpj")
	private String cnpj;
	
	@Column (name = "telefone")
	private String telefone;
	
	@NotNull
	@Column (name = "tipo_servico")
	private String tipoServico;
	
	@OneToMany(mappedBy="id_fornecedor",fetch=FetchType.LAZY,cascade = CascadeType.ALL )
	private List<Manutencao> manutencao = new ArrayList<>();
    	
	
	public Fornecedores() {
	}
	
	public Fornecedores(FornecedorRequest request) {
		this.setNome(request.getNome());
		this.setCnpj(request.getCnpj());
		this.setTelefone(request.getTelefone());
		this.setTipoServico(request.getTipoServico());
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
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

	public List<Manutencao> getManutencao() {
		return manutencao;
	}

	public void setManutencao(List<Manutencao> manutencao) {
		this.manutencao = manutencao;
	}

}
