package br.com.software.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.software.entities.Veiculos;
import br.com.software.models.dto.response.VeiculosResponse;
import br.com.software.repository.VeiculosRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "veiculos")
public class VeiculosController {

	private final VeiculosRepository veiculosRepository;

	public VeiculosController(VeiculosRepository veiculosRepository) {
		this.veiculosRepository = veiculosRepository;
	}
	
	@GetMapping
	public List<VeiculosResponse> findAll() {
		List<VeiculosResponse> listaVeiculos = VeiculosResponse(veiculosRepository.findAll());
		return listaVeiculos;
	}
}
