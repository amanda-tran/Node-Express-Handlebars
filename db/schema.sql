DROP DATABASE IF EXISTS `burger_db`;

CREATE DATABASE `burger_db`;
USE `burger_db`;

CREATE TABLE `burger`
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (100),
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);