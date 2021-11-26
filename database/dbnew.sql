
drop table if exists `shopUser`;
CREATE TABLE `shopUser` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `account` VARCHAR(100) UNIQUE NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `firstname` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `birthday` DATE NOT NULL,
  `phonenumber` VARCHAR(15) NOT NULL,
  `address` VARCHAR(300) NOT NULL,
  `email` VARCHAR(100) UNIQUE NOT NULL
);

drop table if exists message;
CREATE TABLE `message` (
  `msgID` INT PRIMARY KEY,
  `content` VARCHAR(1000) NOT NULL,
  `timesent` DATETIME NOT NULL,
  `idsent` INT NOT NULL,
  `idreceive` INT NOT NULL,
  foreign key ( `idsent`) references `shopUser` (`id`) on delete cascade,
  foreign key ( `idreceive`) references `shopUser` (`id`) on delete cascade
);

#loai khach hang
drop table if exists CustomerType;
CREATE TABLE CustomerType (
  `typeID` INT PRIMARY KEY,
  `typename` VARCHAR(100) NOT NULL,
  `content` VARCHAR(100) NOT NULL,
  `request` VARCHAR(100) NOT NULL
);

drop table if exists Customer;
CREATE TABLE `Customer` (
  `id` INT PRIMARY KEY,
  `cusTypeID` INT,
   foreign key (`id`) references `shopUser` (`id`) on delete cascade,
   foreign key (`cusTypeID`) references `CustomerType` (`typeID`) on delete set null
);

#Gio hang
drop table if exists Cart;
CREATE TABLE Cart (
  `cartID` INT AUTO_INCREMENT,
  `cusID` INT NOT NULL,
  PRIMARY KEY (`cartID`, `cusID`),
   foreign key (`cusID`) references `Customer` (`id`) on delete cascade
);

drop table if exists shopOwner;
CREATE TABLE `shopOwner` (
  `shopOwnerID` INT PRIMARY KEY,
  `shopName` VARCHAR(40) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date,
  `status` VARCHAR(20),
   foreign key (shopOwnerID) references `shopUser` (id) on delete cascade
);

drop table if exists product;
CREATE TABLE `product` (
  `id` int AUTO_INCREMENT,
  `ownerID` int NOT NULL,
  `amount` int NOT NULL,
  `name` VARCHAR(40),
  `description` VARCHAR(100),
  `price` INT NOT NULL,
  `type` VARCHAR(40),
  `imageURL` VARCHAR(100),
  PRIMARY KEY (`id`, `ownerID`),
   foreign key (ownerID) references `shopOwner` (shopOwnerID) on delete cascade
);

drop table if exists `admin`;
CREATE TABLE `admin` (
	adminID INT PRIMARY KEY,
	 foreign key (adminId) references shopUser (id) on delete cascade
);

drop table if exists `transaction`;
CREATE TABLE `transaction` (
  `transId` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `deliverAddr` varchar(255) NOT NULL,
  `discountCode` varchar(255),
  `customerId` int NOT NULL,
    foreign key (`customerId`) references `Customer` (`id`) on delete cascade
);

drop table if exists `company`;
CREATE TABLE `company` (
  `companyID` int PRIMARY KEY AUTO_INCREMENT,
  `companyName` varchar(255) NOT NULL
);

# Don hang
drop table if exists `order`;
CREATE TABLE `order` (
  `transID` int NOT NULL,
  `orderID` int NOT NULL,
  `totalPrice` double(10,2) NOT NULL,
  `status` varchar(255) NOT NULL,
  `paymentTime` timestamp,
  `ownerID` INT,
  `productID` INT,
  `companyID` INT,
  PRIMARY KEY (`transID`, `orderID`),
   foreign key (`transID`) references `transaction` (`transId`) on delete cascade,
    FOREIGN KEY (productID, ownerID)
	REFERENCES product (id, ownerID) ON DELETE SET NULL,
   foreign key (`companyID`) references `company` (`companyID`) on delete cascade
);

#Lien he
drop table if exists `contact`;
CREATE TABLE `contact` (
  `dCompanyId` int NOT NULL,
  `phoneNum` varchar(11) NOT NULL,
  `dCompanyAddr` varchar(255) NOT NULL,
  PRIMARY KEY (`dCompanyId`, `phoneNum`),
   foreign key (`dCompanyId`) references `company` (`companyID`) on delete cascade
);

#Dot giam gia
drop table if exists sale;
CREATE TABLE `sale` (
  `code` varchar(9) PRIMARY KEY NOT NULL,
  `sName` varchar(255) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `adminID` INT NULL,
  `shopOwnerID` INT NOT NULL,
   foreign key (`adminID`) references `admin` (`adminID`) on delete set null,
   foreign key (`shopOwnerID`) references `shopOwner` (`shopOwnerID`) on delete cascade
);

# ma giam gia
CREATE TABLE `discountCode` (
  `cName` varchar(255) NOT NULL,
  `serial` varchar(9) NOT NULL,
  `saleCode` varchar(9) NOT NULL,
  `value` float NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`cName`, `serial`, `saleCode`),
   foreign key (`saleCode`) references `sale` (`code`) on delete cascade
);

drop table if exists deliver;
CREATE TABLE `deliver` (
  `dCompanyId` int NOT NULL,
  `dTransactionId` int NOT NULL,
  `dOrderId` int NOT NULL,
  `dOrderStatus` varchar(255) NOT NULL,
  `startDate` TIMESTAMP NOT NULL,
  `endDate` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`dCompanyId`, `dTransactionId`, `dOrderId`),
   foreign key (`dCompanyId`) references `company` (`companyID`) on delete cascade,
   foreign key (`dTransactionId`, `dOrderId`) references `order` (transID, orderID) on delete cascade
);

# Gio hang chua san pham
drop table if exists productInCart; 
CREATE TABLE `productInCart` (
  `cartID` INT NOT NULL,
  `customerID` INT NOT NULL,
  `ownerID` INT NOT NULL,
  `productID` INT NOT NULL,
  `amount` INT NOT NULL,
  PRIMARY KEY (`cartID`, `customerID`, `ownerID`, `productID`),
  foreign key (`cartID`) references Cart (cartID) on delete cascade,
  foreign key (`ownerID`, `productID`) references product (`ownerID`, `id`) on delete cascade
);

#danh gia san pham
drop table if exists review;
CREATE TABLE `review` (
  `ownerID` INT NOT NULL,
  `productID` INT NOT NULL,
  `customerID` INT NOT NULL,
  `content` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`ownerID`, `productID`, `customerID`),
   foreign key (`ownerID`, `productID`) references product (`ownerID`, `id`) on delete cascade,
   foreign key (`customerID`) references Customer (`id`)
);

drop table if exists payment;
CREATE TABLE `payment` (
  `transID` INT NOT NULL,
  `productID` INT NOT NULL,
  `customerID` INT NOT NULL,
  `ownerID` INT NOT NULL,
  `method` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`transID`, `productID`, `customerID`, `ownerID`),
   foreign key (`ownerID`, `productID`) references product (`ownerID`, `id`) on delete cascade,
   foreign key (`customerID`) references Customer (`id`) on delete cascade,
   foreign key (transID) references transaction (transID)
);

# Loai khach hang nhan ma giam gia
drop table if exists promotion;
CREATE TABLE `promotion` (
  `pName` varchar(255) NOT NULL,
  `pSerial` varchar(9) NOT NULL,
  `pSaleCode` varchar(9) NOT NULL,
  `pCustomerTypeCode` INT NOT NULL,
  PRIMARY KEY (`pName`, `pSerial`, `pSaleCode`, `pCustomerTypeCode`),
   foreign key (pCustomerTypeCode) references CustomerType (typeID) on delete cascade,
   foreign key (`pName`, `pSerial`, `pSaleCode`) references discountCode (`cName`, `serial`, `saleCode`) on delete cascade
);

# Khach hang so huu ma giam gia
CREATE TABLE `own` (
  `oName` varchar(255) NOT NULL,
  `oSerial` varchar(9) NOT NULL,
  `oSaleCode` varchar(9) NOT NULL,
  `oCusID` INT NOT NULL,
  `used` int NOT NULL,
  PRIMARY KEY (`oName`, `oSerial`, `oSaleCode`, `oCusID`),
   foreign key (`oName`, `oSerial`, `oSaleCode`) references discountCode (`cName`, `serial`, `saleCode`) on delete cascade,
   foreign key (oCusID) references Customer (id) on delete cascade
);
