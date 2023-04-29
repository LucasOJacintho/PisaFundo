package br.com.software.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.software.models.dto.request.BuscaRequest;
import br.com.software.models.dto.request.VeiculoRequest;
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

	@PostMapping("cadastrar")
	public DataResponse cadastrar(@Valid @RequestBody VeiculoRequest request) {
		return service.cadastrar(request);
	}
	
	@PostMapping
	public DataResponse encontrarVeiculos(@RequestBody BuscaRequest request) {
		return service.encontrarVeiculos(request);
	}	
}
