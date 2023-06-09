package br.com.software.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import br.com.software.entities.Fornecedores;
import br.com.software.models.dto.request.BuscaRequest;
import br.com.software.models.dto.request.FornecedorRequest;
import br.com.software.models.dto.request.LoginRequest;
import br.com.software.models.dto.response.DataResponse;
import br.com.software.models.dto.response.FornecedorResponse;
import br.com.software.repository.FornecedoresRepository;

@Service
public class FornecedoresService {

	private final FornecedoresRepository repository;
	private final ManutencoesService manutencoesService;

	public FornecedoresService(FornecedoresRepository repository, ManutencoesService manutencoesService) {
		this.repository = repository;
		this.manutencoesService = manutencoesService;
	}
	
	public DataResponse encontrarTodos(){
		try {
			List<Fornecedores> fornecedores = repository.findAll();
			List<FornecedorResponse> fornecedorResponse = new ArrayList<>();
			if(fornecedores.size() > 0) {
				fornecedores.forEach(fornecedor -> {
					fornecedorResponse.add(new FornecedorResponse(fornecedor));
				});
				return new DataResponse("Fornecedores localizados com sucesso!", fornecedorResponse);
			}
			return new DataResponse("Não há fornecedores cadastrados!");
		} catch (Exception e) {
			return new DataResponse("Houve uma falha de comunicação, não foi possível concluir a solicitação!");
		}
	}

	public DataResponse encontrarFornecedor(BuscaRequest request) {
		try {
			List<Fornecedores> fornecedores = repository.findByPropriedade(request.getValor());
			List<FornecedorResponse> fornecedoresResponse = new ArrayList<>();

			if(fornecedores.size()>0) {
				fornecedores.forEach(fornecedor ->
				fornecedoresResponse.add(new FornecedorResponse(fornecedor)));
				return new DataResponse("Fornecedores localizado com sucesso!", fornecedoresResponse);
			}
			return new DataResponse("Fornecedor não localizado!");
		} catch (Exception e) {
			return new DataResponse("Houve uma falha de comunicação, não foi possível concluir a solicitação!");
		}
	}

	public DataResponse cadastrar(FornecedorRequest request) {
		Fornecedores fornecedor = new Fornecedores(request);
		DataResponse response = new DataResponse(null, null);
		try {
			repository.save(fornecedor);
			response.setMessage("Fornecedor cadastrado com sucesso");
			response.setObject(new FornecedorResponse(fornecedor));
		} catch (Exception e) {
			response.setMessage("Dados invalidos");
		}
		return response;
	}

	public DataResponse login(LoginRequest login) {
		DataResponse response = new DataResponse(null, null);
		Fornecedores fornecedor = repository.login(login.getUsername(), login.getSenha());
		if(fornecedor != null) {
			response.setMessage("Login realizado com sucesso");
			response.setObject(new FornecedorResponse(fornecedor));
		}
		else {
			response.setMessage("O Login falhou");
		}
		return response;
		}

}
