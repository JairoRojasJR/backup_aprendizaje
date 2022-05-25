-- CREACION BASE DE DATOS;
create database example;
-- MOSTRAR BASES DE DATOS;
show databases;
-- ACCEDER A LA BASE DE DATOS;
use holamundo;
-- CREAR UNA TABLA
CREATE TABLE user (
	id int not null auto_increment,
    name varchar(50) not null,
    age int not null,
    email varchar(100) not null,
    primary key(id)
);

-- INSERTAR FILAS LA TABLAR;
INSERT INTO user (name,age,email) values ('Nahomi',17,'nahomi@gmail.com');
INSERT INTO user (name,age,email) values ('Natalia',35,'natalia@gmail.com');
INSERT INTO user (name,age,email) values ('Jossenka',19, 'jossenka@gmail.com');
INSERT INTO user (name,age,email) values ('Kalifa', 25,'kalifa@gmail.com');

-- SELECCIONAR FILAS DE LA TABLA;
SELECT * FROM user;
SELECT * FROM user limit 1;
SELECT * FROM user where age >= 19;