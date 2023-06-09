package br.com.software.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.software.models.dto.request.BuscaRequest;
import br.com.software.models.dto.request.LoginRequest;
import br.com.software.models.dto.request.ProprietarioRequest;
import br.com.software.models.dto.response.DataResponse;
import br.com.software.service.ProprietariosService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("proprietarios")
public class ProprietariosController {
	
	private final ProprietariosService service;
	
	public ProprietariosController(ProprietariosService service) {
		this.service = service;
	}

	@GetMapping
	public DataResponse encontrarTodos() {
		return service.encontrarTodos();
	}
	
	@PostMapping
	public DataResponse encontrarProprietario(@RequestBody BuscaRequest request) {
		return service.encontrarProprietario(request);
	}
	
	@PostMapping(value="cadastrar")
	public DataResponse cadastrar(@RequestBody ProprietarioRequest proprietario) {
		return service.cadastrar(proprietario);
	}
	
	@PostMapping(value="login")
	public DataResponse login(@RequestBody LoginRequest login) {
		return service.login(login);
	}
	
	@PostMapping(value="documento")
	public DataResponse validarDocumento(@RequestParam("documento") String documento) {
		return service.validarDocumento(documento);
	}
}
