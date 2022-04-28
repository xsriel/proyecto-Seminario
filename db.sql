create database seminario;
use seminario;

create table usuario(idUsr int primary key auto_increment, usr varchar(100),correo varchar(255),passwd varchar(255), nombre varchar(50), ape_pat varchar(50), ape_mat varchar(50), edad int, altura int, peso float(2), IMC float(2), genero varchar(10));
create table rutinas(idRutinas int primary key auto_increment, tituloRutina varchar(100), descripcionrutina varchar(255),imgrutina varchar(255));
create table dietas(idDietas int primary key auto_increment, tituloDietas varchar(100), descripciondieta varchar(255), imgdieta varchar(255));

create table usuarios_rutinas(fk_idUsr int, fk_idRutinas int, dias varchar(50));
create table usuarios_dietas(fk_idUsr int, fk_idDietas int, dias varchar(50));

ALTER TABLE usuarios_rutinas ADD CONSTRAINT usuarios_rutinas_fk_idUsr FOREIGN KEY (fk_idUsr) REFERENCES usuario(idUsr);
ALTER TABLE usuarios_rutinas ADD CONSTRAINT usuarios_rutinas_fk_idRutinas FOREIGN KEY (fk_idRutinas) REFERENCES rutinas(idRutinas);

ALTER TABLE usuarios_dietas ADD CONSTRAINT usuarios_dietas_fk_idUsr FOREIGN KEY (fk_idUsr) REFERENCES usuario(idUsr);
ALTER TABLE usuarios_dietas ADD CONSTRAINT usuarios_dietas_fk_idDietas FOREIGN KEY (fk_idDietas) REFERENCES dietas(idDietas);
