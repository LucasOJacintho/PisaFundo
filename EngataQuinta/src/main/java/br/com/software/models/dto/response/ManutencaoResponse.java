package br.com.software.models.dto.response;

import java.util.Date;

import br.com.software.entities.Manutencao;
import lombok.Data;

@Data
public class ManutencaoResponse {
	
	private int id;
	
	private String proprietario;
	
	private String modeloVeiculo;
	
	private String placaVeiculo;
	
	private String fornecedor;
	
	private String telefoneFornecedor;
	
	private String servico;
	
	private Date dataServico;
	
	private boolean concluido;

	public ManutencaoResponse(Manutencao manutencao) {		
		this.setId(manutencao.getId());
		this.setServico(manutencao.getServico());
		this.setDataServico(manutencao.getData_servico());
		this.setConcluido(manutencao.isConcluido());
		this.setFornecedor(manutencao.getFornecedor().getNome());
		this.setProprietario(manutencao.getVeiculo().getProprietario().getNome());
		this.setModeloVeiculo(manutencao.getVeiculo().getModelo());
		this.setPlacaVeiculo(manutencao.getVeiculo().getPlaca());
		this.setTelefoneFornecedor(manutencao.getFornecedor().getTelefone());
	}

	
	
	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getProprietario() {
		return proprietario;
	}

	public void setProprietario(String proprietario) {
		this.proprietario = proprietario;
	}

	public String getModeloVeiculo() {
		return modeloVeiculo;
	}

	public void setModeloVeiculo(String modeloVeiculo) {
		this.modeloVeiculo = modeloVeiculo;
	}

	public String getPlacaVeiculo() {
		return placaVeiculo;
	}

	public void setPlacaVeiculo(String placaVeiculo) {
		this.placaVeiculo = placaVeiculo;
	}

	public String getFornecedor() {
		return fornecedor;
	}

	public void setFornecedor(String fornecedor) {
		this.fornecedor = fornecedor;
	}

	public String getServico() {
		return servico;
	}

	public void setServico(String servico) {
		this.servico = servico;
	}

	public Date getDataServico() {
		return dataServico;
	}

	public void setDataServico(Date dataServico) {
		this.dataServico = dataServico;
	}

	public boolean isConcluido() {
		return concluido;
	}

	public void setConcluido(boolean concluido) {
		this.concluido = concluido;
	}

	public String getTelefoneFornecedor() {
		return telefoneFornecedor;
	}

	public void setTelefoneFornecedor(String telefoneFornecedor) {
		this.telefoneFornecedor = telefoneFornecedor;
	}
	
	
}
