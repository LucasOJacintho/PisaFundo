package br.com.software.models.dto.response;

import java.util.ArrayList;
import java.util.List;

import br.com.software.entities.Manutencao;
import br.com.software.entities.Veiculos;
import lombok.Data;
import lombok.RequiredArgsConstructor;


@Data
@RequiredArgsConstructor
public class VeiculosCompletoResponse {
	
	private int id;

	private String modelo;

	private String placa;
	
	private String chassi;

	private int ano;
	
	private ProprietariosResponse proprietario;
	
	private List<ManutencaoResponse> manutencoes;
	
	public VeiculosCompletoResponse(Veiculos veiculo) {
		this.setId(veiculo.getId());
		this.setPlaca(veiculo.getPlaca());
		this.setChassi(veiculo.getChassi());
		this.setModelo(veiculo.getModelo());
		this.setAno(veiculo.getAno());
		//this.setProprietario(new ProprietariosResponse(veiculo.getProprietario()));
		this.setManutencoes(veiculo.getManutencao());
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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
	
	public ProprietariosResponse getProprietario() {
		return proprietario;
	}

	public void setProprietario(ProprietariosResponse proprietario) {
		this.proprietario = proprietario;
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

