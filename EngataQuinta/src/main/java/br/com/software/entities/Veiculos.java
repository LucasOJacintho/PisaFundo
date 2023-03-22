package br.com.software.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@RequiredArgsConstructor
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
	
	@Column(name="ano", nullable = false)
	private int ano;
	
	
	
	
	
}
