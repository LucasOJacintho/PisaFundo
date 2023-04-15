package br.com.software.models.dto.response;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIncludeProperties;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor

public class DataResponse {
	

	private String message;
	private Object object;

	public DataResponse(String message, Object veiculos) {
		this.setMessage(message);
		this.setObject(veiculos);
	}
	
	public DataResponse(String message) {
		this.setMessage(message);
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getObject() {
		return object;
	}

	public void setObject(Object object) {
		this.object = object;
	}

	
}
