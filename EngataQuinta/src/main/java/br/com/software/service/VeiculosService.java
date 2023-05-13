package br.com.software.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.software.entities.Manutencao;
import br.com.software.entities.Veiculos;
import br.com.software.models.dto.request.BuscaRequest;
import br.com.software.models.dto.request.VeiculoRequest;
import br.com.software.models.dto.response.DataResponse;
import br.com.software.models.dto.response.VeiculosCompletoResponse;
import br.com.software.models.dto.response.VeiculosResponse;
import br.com.software.repository.ManutencoesRepository;
import br.com.software.repository.ProprietariosRepository;
import br.com.software.repository.VeiculosRepository;

@Service
public class VeiculosService {

	private final VeiculosRepository repository;
	private final ProprietariosRepository proprietarioRepository;
	private final ManutencoesRepository manutencaoRespository;

	public  VeiculosService(VeiculosRepository veiculosRepository,
			ProprietariosRepository proprietarioRepository,
			ManutencoesRepository manutencoesRepository) {
		this.repository = veiculosRepository;
		this.proprietarioRepository = proprietarioRepository;
		this.manutencaoRespository = manutencoesRepository;
	}

	public DataResponse encontrarTodos() {
		try {
			List<Veiculos> veiculos = repository.findAll();

			List<VeiculosResponse> veiculosResponse = new ArrayList<>();
			if (veiculos.size() > 0) {
				veiculos.forEach(veiculo -> veiculosResponse.add(new VeiculosResponse(veiculo)));
				String message = "Veiculos encontrados com sucesso!";
				return new DataResponse(message, veiculosResponse);
			}
			String message = "Não há veiculos cadastrados!";
			return new DataResponse(message);
		} catch (Exception e) {
			String message = "Houve uma falha de comunicação, não foi possível concluir a solicitação!";
			return new DataResponse(message);
		}

	}

	public DataResponse cadastrar(VeiculoRequest request) {
		//Proprietarios proprietario = proprietarioRepository.getProprietarioById(request.getVeiculos_proprietarios());
		//request.setProprietario(proprietario);
		Veiculos veiculo = new Veiculos(request);
		DataResponse response = new DataResponse(null, null);
		try {
			repository.save(veiculo);
			response.setMessage("Veiculo cadastrado com sucesso");
			response.setObject(veiculo);
		} catch (Exception e) {
			response.setMessage("Dados invalidos");
		}
		return response;
	}
	
	public DataResponse encontrarVeiculos(@RequestBody BuscaRequest objeto) {
		
		try {
			List<Veiculos> veiculos = repository.findByPropriedade(objeto.getValor());
			List<VeiculosCompletoResponse> veiculosResponse = new ArrayList<>();
			
			if(veiculos.size()>0) {
				veiculos.forEach(veiculo -> 
				veiculosResponse.add(new VeiculosCompletoResponse(veiculo)));
				String message = "Veiculos encontrados com sucesso!";
				return new DataResponse(message, veiculosResponse);
			}
			String message = "Veículo não localizado!";
			return new DataResponse(message);
		} catch (Exception e){
			String message = "Houve um problema de comunicação!";
			return new DataResponse(message);
		}
	}

}
