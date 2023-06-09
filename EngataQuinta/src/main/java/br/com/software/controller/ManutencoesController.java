package br.com.software.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.software.models.dto.request.ManutencaoRequest;
import br.com.software.models.dto.response.DataResponse;
import br.com.software.models.dto.response.ManutencaoResponse;
import br.com.software.service.ManutencoesService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("manutencoes")
public class ManutencoesController {
	
	private final ManutencoesService service;
	
	public ManutencoesController(ManutencoesService service) {
		this.service = service;
	}

	@GetMapping
	public DataResponse encontrarTodos() {
		return service.encontrarTodos();
	}
	
	@PostMapping(value="cadastrar") 
	public DataResponse cadastrar(@RequestBody ManutencaoRequest manutencao) {
		return service.cadastrar(manutencao);
	}
	
	@GetMapping(value="buscar_fornecedor_id")
	public List<ManutencaoResponse> buscaFornecedorId(@RequestParam int id) {
		return service.buscaFornecedorId(id);
	}

	@PutMapping(value="concluir_manutencao")
	public void concluirManutencao(@RequestBody Integer id) {
		service.concluirManutencao(id);
	}
}
