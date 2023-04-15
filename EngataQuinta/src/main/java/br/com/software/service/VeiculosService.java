package br.com.software.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.software.controller.retur;
import br.com.software.entities.Veiculos;
import br.com.software.models.dto.request.VeiculoRequest;
import br.com.software.models.dto.request.VeiculosBuscaRequest;
import br.com.software.models.dto.response.DataResponse;
import br.com.software.models.dto.response.VeiculosResponse;
import br.com.software.repository.VeiculosRepository;
import jakarta.validation.Valid;

@Service
public class VeiculosService {

	private final VeiculosRepository veiculosRepository;

	public VeiculosService(VeiculosRepository veiculosRepository) {
		this.veiculosRepository = veiculosRepository;
	}

	public DataResponse encontrarTodos() {
		try {
			List<Veiculos> veiculos = veiculosRepository.findAll();

			List<VeiculosResponse> veiculosResponse = new ArrayList<>();
			if (veiculos.size() > 0) {
				veiculos.forEach(veiculo -> veiculosResponse.add(new VeiculosResponse(veiculo)));
				String message = "Veiculos encontrados com sucesso!";
				return new DataResponse(message, veiculosResponse);
			}
			String message = "Não há veiculos cadastrados!";
			return new DataResponse(message);
		} catch (Exception e) {
			String message = "Houve um problema de comunicação!";
			return new DataResponse(message, veiculosRepository.findAll());
		}

	}

	public DataResponse novoVeiculo(VeiculoRequest request) {
		Veiculos veiculo = new Veiculos(request);
		DataResponse response = new DataResponse(null, null);
		try {
			veiculosRepository.save(veiculo);
			response.setMessage("Veiculo cadastrado com sucesso");
			response.setObject(veiculo);
		} catch (Exception e) {
			response.setMessage("Dados invalidos");
		}
		return response;
	}
	
	public DataResponse encontrarVeiculos(@RequestBody VeiculosBuscaRequest objeto) {
		
		try {
			List<Veiculos> veiculos = veiculosRepository.findByPropriedade(objeto.getValor());

			List<VeiculosResponse> veiculosResponse = new ArrayList<>();
			if(veiculos.size()>0) {
				veiculos.forEach(veiculo -> veiculosResponse.add(new VeiculosResponse(veiculo)));
				String message = "Veiculos encontrados com sucesso!";
				return new DataResponse(message, veiculosResponse);
			}
			String message = "Não há veiculos cadastrados!";
			return new DataResponse(message);
		} catch (Exception e){
			String message = "Houve um problema de comunicação!";
			return new DataResponse(message);
		}
	}

}
