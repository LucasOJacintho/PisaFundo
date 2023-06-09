package br.com.software.entities;

import java.util.ArrayList;
import java.util.List;

import br.com.software.models.dto.request.VeiculoRequest;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
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
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="veiculos_proprietarios", referencedColumnName="id", nullable = false, foreignKey = @ForeignKey(name="veiculos_proprietarios"))
	private Proprietarios proprietario;
	
	@OneToMany(mappedBy="veiculo",fetch=FetchType.LAZY,cascade = CascadeType.ALL )
	private List<Manutencao> manutencao = new ArrayList<>();

		
	public Proprietarios getProprietario() {
		return proprietario;
	}

	public void setProprietario(Proprietarios proprietario) {
		this.proprietario = proprietario;
	}

	public Veiculos(VeiculoRequest request) {
		this.setAno(request.getAno());
		this.setChassi(request.getChassi());
		this.setModelo(request.getModelo());
		this.setPlaca(request.getPlaca());
		Proprietarios proprietario = new Proprietarios();
		proprietario.setId(request.getVeiculos_proprietarios());
		this.setProprietario(proprietario);
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

	public List<Manutencao> getManutencao() {
		return manutencao;
	}

	public void setManutencao(List<Manutencao> manutencao) {
		this.manutencao = manutencao;
	}
	
}
