package br.com.software.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.software.entities.Manutencao;

public interface ManutencoesRepository extends JpaRepository<Manutencao, Integer> {

	List<Manutencao> findAll();
	
	@Query(nativeQuery=true,value= "SELECT * FROM veiculo_fornecedor WHERE id_fornecedor = :valor")
	List<Manutencao> findByFornecedorId(@Param("valor")int valor);

}
