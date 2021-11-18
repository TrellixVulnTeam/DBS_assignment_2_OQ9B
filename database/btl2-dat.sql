create database dbs;

use dbs;

drop table if exists productInCart;
create table productInCart (
	cartID INT NOT NULL,
    customerID INT NOT NULL,
    shopOwnerID INT NOT NULL,
	productID INT NOT NULL,
	amount INT NOT NULL,
    primary key (cartID, customerID, shopOwnerID, productID)
);
drop table if exists shopOwner;
create table shopOwner (
	shopOwnerID INT NOT NULL PRIMARY KEY,
    shopName VARCHAR(40) NOT NULL,
    startDate date not null,
    endDate date,
    status VARCHAR(20),
    constraint check (status in ('Open', 'Close'))
);

drop table if exists review;
create table review (
	shopOwnerID INT NOT NULL,
    productID INT NOT NULL,
    customerID INT NOT NULL,
    content VARCHAR(100) NOT NULL,
    primary key (shopOwnerID, productID, customerID)
);

drop table if exists product;

create table product (
	id int not null auto_increment,
	shopOwnerID int not null,
    amount int not null,
    name VARCHAR(40),
    description VARCHAR(100),
    price INT NOT NULL,
    `type` VARCHAR(40),
    imageURL VARCHAR(100),
    primary key(id, shopOwnerID)
);

drop table if exists payment;
create table payment (
	transID INT NOT NULL,
	productID INT NOT NULL,
	customerID INT NOT NULL,
    method VARCHAR(40) NOT NULL,
    primary key (transID, productID, customerID)
);


