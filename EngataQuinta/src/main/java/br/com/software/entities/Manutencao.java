package br.com.software.entities;

import java.util.Date;

import br.com.software.models.dto.request.ManutencaoRequest;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name="veiculo_fornecedor")
public class Manutencao {
	
	@Id
	@Column(name = "id",insertable=false, updatable=false)
	private int id;
	
	@Column(name = "id_veiculos",insertable=false, updatable=false)
	private int id_veiculos;
	
	@Column(name = "id_fornecedor",insertable=false, updatable=false)
	private int id_fornecedor;
	
	@NotBlank
	@Column(name = "servico")
	private String servico;

	@Column (name = "data_servico")
	private Date data_servico;      
	
	@Column (name = "concluido")
	private boolean concluido;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="id_veiculos", referencedColumnName="id", nullable = false)
	private Veiculos veiculo;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="id_fornecedor", referencedColumnName="id", nullable = false)
	private Fornecedores fornecedor;

	
	public Manutencao() {	
	}
	
	public Manutencao(ManutencaoRequest request) {
		Veiculos veiculo = new Veiculos();
		veiculo.setId(request.getId_veiculo());
		Fornecedores fornecedor = new Fornecedores();
		fornecedor.setId(request.getId_fornecedor());
		this.setVeiculo(veiculo);
		this.setFornecedor(fornecedor);
		this.setId_fornecedor(request.getId_fornecedor());
		this.setData_servico(new Date());
		this.setServico(request.getServico());
		this.setConcluido(request.isConcluido());
	}

	public Manutencao(Manutencao request) {
		this.setVeiculo(request.getVeiculo());
		this.setFornecedor(request.getFornecedor());
		this.setData_servico(request.getData_servico());
		this.setServico(request.getServico());
		this.setConcluido(request.isConcluido());
	}
	
public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	public int getId_veiculos() {
		return id_veiculos;
	}

	public void setId_veiculos(int id_veiculos) {
		this.id_veiculos = id_veiculos;
	}

	public int getId_fornecedor() {
		return id_fornecedor;
	}

	public void setId_fornecedor(int id_fornecedor) {
		this.id_fornecedor = id_fornecedor;
	}

	public String getServico() {
		return servico;
	}

	public void setServico(String servico) {
		this.servico = servico;
	}

	public Date getData_servico() {
		return data_servico;
	}

	public void setData_servico(Date data_servico) {
		this.data_servico = data_servico;
	}

	public boolean isConcluido() {
		return concluido;
	}

	public void setConcluido(boolean concluido) {
		this.concluido = concluido;
	}

	public Veiculos getVeiculo() {
		return veiculo;
	}

	public void setVeiculo(Veiculos veiculo) {
		this.veiculo = veiculo;
	}

	public Fornecedores getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(Fornecedores fornecedor) {
		this.fornecedor = fornecedor;
	}
	
}
