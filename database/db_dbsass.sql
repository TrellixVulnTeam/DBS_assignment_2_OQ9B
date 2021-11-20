CREATE TABLE `transaction` (
  `transactionId` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `deliverAddress` varchar(255) NOT NULL,
  `promotionCode` varchar(255),
  `customerId` int NOT NULL
);

CREATE TABLE `order` (
  `oTransactionId` int NOT NULL,
  `orderId` int NOT NULL,
  `totalPrice` double(10,2) NOT NULL,
  `orderStatus` varchar(255) NOT NULL,
  `paymentTime` timestamp,
  PRIMARY KEY (`oTransactionId`, `orderId`)
);

CREATE TABLE `company` (
  `companyId` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `companyName` varchar(255) NOT NULL
);

CREATE TABLE `deliver` (
  `dCompanyId` int NOT NULL,
  `dTransactionId` int NOT NULL,
  `dOrderId` int NOT NULL,
  `dOrderStatus` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  PRIMARY KEY (`dCompanyId`, `dTransactionId`, `dOrderId`)
);

CREATE TABLE `contact` (
  `dCompanyId` int NOT NULL,
  `phoneNum` varchar(11) NOT NULL,
  `dCompanyAddr` varchar(255) NOT NULL,
  PRIMARY KEY (`dCompanyId`, `phoneNum`)
);

CREATE TABLE `productInCart` (
  `cartID` INT NOT NULL,
  `customerID` INT NOT NULL,
  `shopOwnerID` INT NOT NULL,
  `productID` INT NOT NULL,
  `amount` INT NOT NULL,
  PRIMARY KEY (`cartID`, `customerID`, `shopOwnerID`, `productID`)
);

CREATE TABLE `shopOwner` (
  `shopOwnerID` INT PRIMARY KEY NOT NULL,
  `shopName` VARCHAR(40) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date,
  `status` VARCHAR(20),
  `constraint` check(status in ('Open','Close'))
);

CREATE TABLE `review` (
  `shopOwnerID` INT NOT NULL,
  `productID` INT NOT NULL,
  `customerID` INT NOT NULL,
  `content` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`shopOwnerID`, `productID`, `customerID`)
);

CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shopOwnerID` int NOT NULL,
  `amount` int NOT NULL,
  `name` VARCHAR(40),
  `description` VARCHAR(100),
  `price` INT NOT NULL,
  `type` VARCHAR(40),
  `imageURL` VARCHAR(100),
  PRIMARY KEY (`id`, `shopOwnerID`)
);

CREATE TABLE `payment` (
  `transID` INT NOT NULL,
  `productID` INT NOT NULL,
  `customerID` INT NOT NULL,
  `shopOwnerID` INT NOT NULL,
  `method` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`transID`, `productID`, `customerID`, `shopOwnerID`)
);

CREATE TABLE `admin` (
  `ID_admin` varchar(9) PRIMARY KEY NOT NULL
);

CREATE TABLE `promotion` (
  `pName` varchar(255) NOT NULL,
  `pSerial` varchar(9) NOT NULL,
  `pCode` varchar(9) NOT NULL,
  `pCustomerTypeCode` varchar(9) NOT NULL,
  PRIMARY KEY (`pName`, `pSerial`, `pCode`, `pCustomerTypeCode`)
);

CREATE TABLE `sale` (
  `code` varchar(9) PRIMARY KEY NOT NULL,
  `sName` varchar(255) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `sID_admin` varchar(9) NOT NULL,
  `sID_shop` varchar(9) NOT NULL
);

CREATE TABLE `own` (
  `oName` varchar(255) NOT NULL,
  `oSerial` varchar(9) NOT NULL,
  `oCode` varchar(9) NOT NULL,
  `oCustomerCode` varchar(9) NOT NULL,
  `used` int NOT NULL,
  PRIMARY KEY (`oName`, `oSerial`, `oCode`, `oCustomerCode`)
);

CREATE TABLE `code` (
  `cName` varchar(255) NOT NULL,
  `serial` varchar(9) NOT NULL,
  `cCode` varchar(9) NOT NULL,
  `value` float NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`cName`, `serial`, `cCode`)
);

CREATE TABLE `ShopUser` (
  `ID` INT PRIMARY KEY AUTO_INCREMENT,
  `accounts` VARCHAR(100) NOT NULL,
  `pass` TEXT NOT NULL,
  `firstname` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(100) NOT NULL,
  `birthday` DATE NOT NULL,
  `phonenumber` VARCHAR(15) NOT NULL,
  `address` VARCHAR(300) NOT NULL,
  `email` VARCHAR(100) NOT NULL
);

CREATE TABLE `Message` (
  `IDMess` VARCHAR(30) PRIMARY KEY,
  `content` VARCHAR(1000) NOT NULL,
  `timesent` DATETIME NOT NULL,
  `IDSent` INT NOT NULL,
  `IDReceive` INT NOT NULL
);

CREATE TABLE `Customer` (
  `ID` INT PRIMARY KEY,
  `IDType` INT
);

CREATE TABLE `CustomerType` (
  `IDType` INT PRIMARY KEY,
  `typename` VARCHAR(100) NOT NULL,
  `content` VARCHAR(100) NOT NULL,
  `request` VARCHAR(100) NOT NULL
);

CREATE TABLE `Cart` (
  `STT` INT AUTO_INCREMENT,
  `IDCus` INT NOT NULL,
  PRIMARY KEY (`STT`, `IDCus`)
);

ALTER TABLE `order` ADD FOREIGN KEY (`oTransactionId`) REFERENCES `transaction` (`transactionId`) ON DELETE CASCADE;

ALTER TABLE `deliver` ADD FOREIGN KEY (`dCompanyId`) REFERENCES `company` (`companyId`) ON DELETE CASCADE;

ALTER TABLE `deliver` ADD FOREIGN KEY (`dTransactionId`) REFERENCES `order` (`oTransactionId`) ON DELETE CASCADE;

ALTER TABLE `deliver` ADD FOREIGN KEY (`dOrderId`) REFERENCES `order` (`orderId`) ON DELETE CASCADE;

ALTER TABLE `contact` ADD FOREIGN KEY (`dCompanyId`) REFERENCES `company` (`companyId`) ON DELETE CASCADE;

ALTER TABLE `promotion` ADD FOREIGN KEY (`pSerial`) REFERENCES `code` (`serial`) ON DELETE CASCADE;

ALTER TABLE `sale` ADD FOREIGN KEY (`sID_admin`) REFERENCES `admin` (`ID_admin`) ON DELETE CASCADE;

ALTER TABLE `own` ADD FOREIGN KEY (`oSerial`) REFERENCES `code` (`serial`) ON DELETE CASCADE;

ALTER TABLE `code` ADD FOREIGN KEY (`cCode`) REFERENCES `sale` (`code`) ON DELETE CASCADE;

ALTER TABLE `Customer` ADD FOREIGN KEY (`ID`) REFERENCES `ShopUser` (`ID`);

ALTER TABLE `admin` ADD FOREIGN KEY (`ID_admin`) REFERENCES `ShopUser` (`ID`);

ALTER TABLE `shopOwner` ADD FOREIGN KEY (`shopOwnerID`) REFERENCES `ShopUser` (`ID`);

ALTER TABLE `promotion` ADD FOREIGN KEY (`pCustomerTypeCode`) REFERENCES `CustomerType` (`IDType`);

ALTER TABLE `productInCart` ADD FOREIGN KEY (`customerID`) REFERENCES `Customer` (`ID`);

ALTER TABLE `productInCart` ADD FOREIGN KEY (`shopOwnerID`) REFERENCES `shopOwner` (`shopOwnerID`);

ALTER TABLE `productInCart` ADD FOREIGN KEY (`productID`) REFERENCES `product` (`id`);

ALTER TABLE `productInCart` ADD FOREIGN KEY (`cartID`) REFERENCES `Cart` (`STT`);

ALTER TABLE `Cart` ADD FOREIGN KEY (`IDCus`) REFERENCES `Customer` (`ID`);

ALTER TABLE `review` ADD FOREIGN KEY (`productID`) REFERENCES `product` (`id`);

ALTER TABLE `review` ADD FOREIGN KEY (`customerID`) REFERENCES `Customer` (`ID`);

ALTER TABLE `review` ADD FOREIGN KEY (`shopOwnerID`) REFERENCES `shopOwner` (`shopOwnerID`);

ALTER TABLE `product` ADD FOREIGN KEY (`shopOwnerID`) REFERENCES `shopOwner` (`shopOwnerID`);

ALTER TABLE `payment` ADD FOREIGN KEY (`productID`) REFERENCES `product` (`id`);

ALTER TABLE `payment` ADD FOREIGN KEY (`customerID`) REFERENCES `Customer` (`ID`);

ALTER TABLE `payment` ADD FOREIGN KEY (`transID`) REFERENCES `transaction` (`transactionId`);

ALTER TABLE `transaction` ADD FOREIGN KEY (`customerId`) REFERENCES `Customer` (`ID`);

ALTER TABLE `sale` ADD FOREIGN KEY (`sID_shop`) REFERENCES `shopOwner` (`shopOwnerID`);

ALTER TABLE `Message` ADD FOREIGN KEY (`IDReceive`) REFERENCES `ShopUser` (`ID`);

ALTER TABLE `own` ADD FOREIGN KEY (`oCustomerCode`) REFERENCES `Customer` (`ID`);

ALTER TABLE `Message` ADD FOREIGN KEY (`IDSent`) REFERENCES `ShopUser` (`ID`);

ALTER TABLE `payment` ADD FOREIGN KEY (`shopOwnerID`) REFERENCES `shopOwner` (`shopOwnerID`);

CREATE INDEX `cSerial` ON `code` (`serial`);
