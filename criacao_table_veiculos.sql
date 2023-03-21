create database engata_quinta;

create table VEICULOS(
id INT auto_increment, 
modelo varchar(50) NOT NULL, 
placa VARCHAR(7) NOT NULL,
ano int NOT NULL, 
primary key (id)) Engine = InnoDB; 
;