create database engata_quinta;

create table VEICULOS(
id INT auto_increment, 
modelo varchar(50) NOT NULL, 
placa VARCHAR(7) NOT NULL,
chassi varchar(17) not null,
ano int NOT NULL, 
primary key (id)) Engine = InnoDB; 
;

alter table veiculos
 add idProprietario INT not null;
 
 create table PROPRIETARIOS(
id INT auto_increment, 
nome varchar(50) NOT NULL, 
rg VARCHAR(9) NOT NULL,
cpf varchar(11) not null,
aniversario date NOT NULL, 
primary key (id)) Engine = InnoDB; 
;

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