package br.com.software.entities;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import br.com.software.models.dto.request.ProprietarioRequest;
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
@Table(name="proprietarios")
public class Proprietarios {
	
	@Id
	@Column(name = "id")
	private int id;
	
	@NotBlank
	@Column(name = "nome")
	private String nome;

	@Column (name = "cnpj")
	private String cnpj;
	
	@Column (name = "cpf")
	private String cpf;
	
	@Column (name = "username")
	private String username;
	
	@Column (name = "senha")
	private String senha;
	
	@NotNull
	@Column (name = "aniversario")
	private Date aniversario;
	
	@OneToMany(mappedBy="proprietario",fetch=FetchType.LAZY,cascade = CascadeType.ALL )
	private List<Veiculos> veiculos = new ArrayList<>();
	
	public Proprietarios() {}

	public Proprietarios(ProprietarioRequest request) {
		this.setAniversario(request.getAniversario());
		this.setCpf(request.getCpf());
		this.setCnpj(request.getCnpj());
		this.setNome(request.getNome());
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
	
	public List<Veiculos> getVeiculos() {
		return veiculos;
	}

	public void setVeiculos(List<Veiculos> veiculos) {
		this.veiculos = veiculos;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}
