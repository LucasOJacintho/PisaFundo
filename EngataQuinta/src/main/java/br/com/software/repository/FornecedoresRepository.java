package br.com.software.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.software.entities.Fornecedores;

public interface FornecedoresRepository extends JpaRepository<Fornecedores, Integer> {

	List<Fornecedores> findAll();

	@Query(nativeQuery=true,value= "SELECT * FROM FORNECEDOR WHERE cnpj = :valor or tipo_servico = :valor")
	List<Fornecedores> findByPropriedade(@Param("valor") String valor);

	@Query(nativeQuery=true,value= "SELECT * FROM FORNECEDOR WHERE id = :valor")
	Fornecedores getProprietarioById(@Param("valor")int valor);

}
