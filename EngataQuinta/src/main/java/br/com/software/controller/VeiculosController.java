package br.com.software.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.software.models.dto.request.VeiculoRequest;
import br.com.software.models.dto.request.VeiculosBuscaRequest;
import br.com.software.models.dto.response.DataResponse;
import br.com.software.service.VeiculosService;
import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value = "veiculos")
public class VeiculosController {

	private final VeiculosService service;

	public VeiculosController(VeiculosService service) {
		this.service = service;
	}

	
	@GetMapping
	public DataResponse encontrarTodos() {
		return service.encontrarTodos();		
	}


	@PostMapping("criar-veiculo")
	public DataResponse novoVeiculo(@Valid @RequestBody VeiculoRequest request) {
		return service.novoVeiculo(request);
	}
	
	@PostMapping
	public DataResponse encontrarVeiculos(@RequestBody VeiculosBuscaRequest request) {
		return service.encontrarVeiculos(request);
	}	
}
