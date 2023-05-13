package br.com.software.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.software.models.dto.request.BuscaRequest;
import br.com.software.models.dto.request.FornecedorRequest;
import br.com.software.models.dto.response.DataResponse;
import br.com.software.service.FornecedoresService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("fornecedores")
public class FornecedoresController {
	
	private final FornecedoresService service;
	
	public FornecedoresController(FornecedoresService service) {
		this.service = service;
	}

	@GetMapping
	public DataResponse encontrarTodos() {
		return service.encontrarTodos();
	}
	
	@PostMapping
	public DataResponse encontrarFornecedor(@RequestBody BuscaRequest request) {
		return service.encontrarFornecedor(request);
	}
	
	@PostMapping(value="cadastrar")
	public DataResponse cadastrar(@RequestBody FornecedorRequest fornecedor) {
		return service.cadastrar(fornecedor);
	}
}
