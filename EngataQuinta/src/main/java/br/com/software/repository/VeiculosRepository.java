package br.com.software.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.software.entities.Veiculos;


public interface VeiculosRepository extends JpaRepository<Veiculos, Integer> {

	@Query(nativeQuery=true,value= "SELECT * FROM VEICULOS WHERE placa = :valor or modelo = :valor or chassi = :valor ")
	List<Veiculos> findByPropriedade( @Param("valor") String valor);

}
