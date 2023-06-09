package br.com.software.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import br.com.software.entities.Manutencao;
import br.com.software.models.dto.request.ManutencaoRequest;
import br.com.software.models.dto.response.DataResponse;
import br.com.software.models.dto.response.ManutencaoResponse;
import br.com.software.repository.ManutencoesRepository;

@Service
public class ManutencoesService {

	private final ManutencoesRepository repository;

	public ManutencoesService(ManutencoesRepository repository) {
		this.repository = repository;
	}
	
	public DataResponse encontrarTodos(){
		List<Manutencao> manutencoes = repository.findAll();
		return new DataResponse("Fornecedores localizados com sucesso!", manutencoes);
	}

	public DataResponse cadastrar(ManutencaoRequest request) {
		Manutencao manutencao = new Manutencao(request);
		DataResponse response = new DataResponse(null, null);
		try {
			repository.save(manutencao);
			response.setMessage("Manutenção cadastrada com sucesso");
			response.setObject(new Manutencao(manutencao));
		} catch (Exception e) {
			response.setMessage("Dados invalidos");
		}
		return response;
	}

	public List<ManutencaoResponse> buscaFornecedorId(int id) {
		List<ManutencaoResponse> manutencoesResponse = new ArrayList<>();
		List<Manutencao> manutencoes = repository.findByFornecedorId(id);
		manutencoes.forEach(manutencao -> {
			ManutencaoResponse manutencaoResponse = new ManutencaoResponse(manutencao);
			manutencoesResponse.add(manutencaoResponse);
		});
		return manutencoesResponse;
	}

	public void concluirManutencao(Integer id) {
		repository.concluirManutencao(id);
	}

}
