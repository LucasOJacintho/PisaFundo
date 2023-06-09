package br.com.software.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.software.models.dto.request.LoginRequest;
import br.com.software.service.FornecedoresService;
import br.com.software.service.ProprietariosService;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("login")
public class LoginController {

	//private final AdministradorService administradorService;
	private final FornecedoresService fornecedorService;
	private final ProprietariosService proprietarioService;
	
	public LoginController(FornecedoresService fornecedoresService, ProprietariosService proprietarioService) {
		this.fornecedorService = fornecedoresService;
		this.proprietarioService = proprietarioService;
	}
	
	@PostMapping
	public boolean login(@RequestBody LoginRequest login) {
		return true;
	}
	
}
