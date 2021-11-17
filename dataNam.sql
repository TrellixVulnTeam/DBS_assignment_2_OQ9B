create database dbs;

use dbs;

create table ShopUser(
	ID 	INT PRIMARY KEY,
    accounts  VARCHAR(100) NOT NULL,
    pass TEXT NOT NULL,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    birthday DATE NOT NULL,
    phonenumber VARCHAR(15) NOT NULL,
    address VARCHAR(300) NOT NULL,
    email VARCHAR(100) NOT NULL
);
#drop table ShopUser;
select * from ShopUser;

create table Message(
	IDMess VARCHAR(30) PRIMARY KEY,
    content VARCHAR(1000) NOT NULL,
    timesent DATETIME NOT NULL,
    IDSent INT NOT NULL,
    IDReceive INT NOT NULL
);
select * from Message;

create table Customer(
	ID 	INT PRIMARY KEY,
    IDType INT
);
select * from Customer;

create table CustomerType(
	IDType INT PRIMARY KEY,
    typename VARCHAR(100) NOT NULL,
    content VARCHAR(100) NOT NULL,
    request VARCHAR(100) NOT NULL
);
select * from CustomerType;


create table Cart(
	STT INT auto_increment,
    IDCus INT NOT NULL,
    primary key(STT,IDCus)
);
select * from Cart;

