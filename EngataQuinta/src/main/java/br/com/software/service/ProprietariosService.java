package br.com.software.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import br.com.software.entities.Proprietarios;
import br.com.software.models.dto.request.BuscaRequest;
import br.com.software.models.dto.request.ProprietarioRequest;
import br.com.software.models.dto.response.DataResponse;
import br.com.software.models.dto.response.ProprietariosCompletoResponse;
import br.com.software.models.dto.response.ProprietariosResponse;
import br.com.software.repository.ProprietariosRepository;

@Service
public class ProprietariosService {

	private final ProprietariosRepository repository;

	public ProprietariosService(ProprietariosRepository repository) {
		this.repository = repository;
	}

	/**
	 * Método para buscar todos os proprietarios presentes no banco
	 * @return DataResponse, contendo uma mensagem de status da solicitação
	 * e caso sendo bem sucedido o objeto obtido através da pesquisa.
	 */
	
	public DataResponse encontrarTodos(){
		
		try {
			List<Proprietarios> proprietarios = repository.findAll();
			List<ProprietariosCompletoResponse> proprietariosResponse = new ArrayList<>();
			
			if(proprietarios.size() > 0) {
				proprietarios.forEach(proprietario ->
				proprietariosResponse.add(new ProprietariosCompletoResponse(proprietario)));
				return new DataResponse("Proprietarios localizados com sucesso!", proprietariosResponse);
			}
			return new DataResponse("Não há proprietários cadastrados!");
		} catch (Exception e) {
			return new DataResponse("Houve uma falha de comunicação, não foi possível concluir a solicitação!");
		}
	}

	public DataResponse encontrarProprietario(BuscaRequest request) {
		try {
			List<Proprietarios> proprietarios = repository.findByPropriedade(request.getValor());
			List<ProprietariosCompletoResponse> proprietariosResponse = new ArrayList<>();

			if(proprietarios.size()>0) {
				proprietarios.forEach(proprietario ->
				proprietariosResponse.add(new ProprietariosCompletoResponse(proprietario)));
				return new DataResponse("Proprietario localizado com sucesso!", proprietariosResponse);
			}
			return new DataResponse("Proprietário não localizado!");
		} catch (Exception e) {
			return new DataResponse("Houve uma falha de comunicação, não foi possível concluir a solicitação!");
		}
	}
	
	public DataResponse validarDocumento(String valor) {
		try {
			List<Proprietarios> proprietarios = repository.findByPropriedade(valor);
			if(proprietarios.size()>0) {
				return new DataResponse("Proprietário localizado com sucesso!", proprietarios.get(0).getId());
			}
			return new DataResponse("Proprietário não localizado!");
		} catch (Exception e) {
			return new DataResponse("Houve uma falha de comunicação, não foi possível concluir a solicitação!");
		}
	}

	public DataResponse cadastrar(ProprietarioRequest request) {
		Proprietarios proprietario = new Proprietarios(request);
		DataResponse response = new DataResponse(null, null);
		try {
			repository.save(proprietario);
			response.setMessage("Proprietário cadastrado com sucesso");
			response.setObject(new ProprietariosResponse(proprietario));
		} catch (Exception e) {
			response.setMessage("Dados invalidos");
		}
		return response;
	}
}
