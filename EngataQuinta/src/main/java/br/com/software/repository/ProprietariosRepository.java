package br.com.software.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.software.entities.Proprietarios;
import br.com.software.models.dto.request.BuscaRequest;

public interface ProprietariosRepository extends JpaRepository<Proprietarios, Integer> {

	List<Proprietarios> findAll();

	@Query(nativeQuery=true,value= "SELECT * FROM PROPRIETARIOS WHERE cnpj = :valor or cpf = :valor")
	List<Proprietarios> findByPropriedade(@Param("valor") String valor);

	@Query(nativeQuery=true,value= "SELECT * FROM PROPRIETARIOS WHERE id = :valor")
	Proprietarios getProprietarioById(@Param("valor")int valor);

}
