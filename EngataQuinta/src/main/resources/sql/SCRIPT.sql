 create table PROPRIETARIOS(
id INT auto_increment, 
nome varchar(50) NOT NULL, 
rg VARCHAR(9) NOT NULL,
cpf varchar(11) not null,
aniversario date NOT NULL, 
primary key (id)) Engine = InnoDB; 
;



INSERT INTO `engata_quinta`.`proprietarios` (`id`, `nome`, `rg`, `cpf`, `aniversario`) VALUES ('1', 'Lucas', '344563458', '34556734595', '09/02/1990');


ALTER TABLE `engata_quinta`.`veiculos` 
ADD COLUMN `veiculos_proprietarios` INT NULL AFTER `chassi`,
ADD INDEX `veiculos_proprietarios_idx` (`veiculos_proprietarios` ASC) VISIBLE;
;
ALTER TABLE `engata_quinta`.`veiculos` 
ADD CONSTRAINT `veiculos_proprietarios`
  FOREIGN KEY (`veiculos_proprietarios`)
  REFERENCES `engata_quinta`.`proprietarios` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
ALTER TABLE `engata_quinta`.`proprietarios` 
CHANGE COLUMN `rg` `cnpj` VARCHAR(14) NULL ,
CHANGE COLUMN `cpf` `cpf` VARCHAR(11) NULL ;