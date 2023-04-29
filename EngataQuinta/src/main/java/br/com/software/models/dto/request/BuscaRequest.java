package br.com.software.models.dto.request;

public class BuscaRequest {
	
	private String valor;
	
	private String propriedade;

	public String getPropriedade() {
		return propriedade;
	}

	public void setPropriedade(String propriedade) {
		this.propriedade = propriedade;
	}

	public String getValor() {
		return valor;
	}

	public void setValor(String valor) {
		this.valor = valor;
	}
	

}
