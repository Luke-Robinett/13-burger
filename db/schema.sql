drop database if exists burger_db;
create database burger_db;

use burger_db;

create table burgers (
 id int not null AUTO_INCREMENT,
 name varchar(100),
 devoured boolean,
 primary key (id)
);
