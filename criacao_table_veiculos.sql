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
 add chassi varchar(17) not null;