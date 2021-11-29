
create database dbs;
use dbs;
drop database dbs;


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
# Don hang
drop table if exists `order`;
CREATE TABLE `order` (
  `transID` int NOT NULL,
  `orderID` int NOT NULL,
  `totalPrice` double(10,2) NOT NULL,
  `status` varchar(255) NOT NULL,
  `paymentTime` timestamp,
  `ownerID` INT NOT NULL,
  `productID` INT NOT NULL,
  `companyID` INT,
  PRIMARY KEY (`transID`, `orderID`),
   foreign key (`transID`) references `transaction` (`transId`) on delete cascade,
   foreign key (`ownerID`) references `product` (`ownerID`) on delete cascade,
   foreign key (`productID`) references `product` (`id`) on delete cascade,
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
  `startDate` timestamp NOT NULL,
  `endDate` timestamp,
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

select * from company;
select * from contact;
select * from deliver;
select * from `transaction`;
select * from `order`;
select * from payment;
select * from shopUser;
select * from CustomerType;
#--------------------------------------------------------------------------
use dbs;
insert into `shopUser`(`id`,`account`,`password`,`firstname`,`lastname`,`birthday`,`phonenumber`,`address`,`email`) values(6,'thanhnguyen','32454sdaads','Thành','Nguyễn','2021-2-3','0267376234','quân 2, hồ chí minh city','thanh12323@gmail.com');
insert into `shopUser`(`account`,`password`,`firstname`,`lastname`,`birthday`,`phonenumber`,`address`,`email`) values('vodai123','9123hjdshaa','Đại','Võ thành','2021-9-1','07627368223','quân 4, hồ chí minh','bh13423@gmail.com');
insert into `shopUser`(`account`,`password`,`firstname`,`lastname`,`birthday`,`phonenumber`,`address`,`email`) values('aaaaxxz','','','','2021-1-1','','','gmasxxxils');
insert into `shopUser`(`account`,`password`,`firstname`,`lastname`,`birthday`,`phonenumber`,`address`,`email`) values('2343434','','','','2021-1-1','','','gmasxxdxils');
update `shopUser` set `firstname` = 'minh', `lastname` = 'hiển' where `id` = 2;
update `shopUser` set `phonenumber` = '08223423434' where `id` = 1;
delete from `shopUser` where id=8;
select * from `shopUser`;
INSERT INTO `CustomerType` (`typeID`,`typename`,`content`,`request`) values(4,'sd','ad','sadasd') ;
select * from `CustomerType`;
UPDATE `shopUser` SET `account` = 'hoainam07',`password`='2ryr7gjkhuy2243dwedwer',`firstname`='Nam'
,`lastname`='Nguyễn',`phonenumber`='07128376763',`address`='Dĩ an,bình dương',`email`='nam@gmail.com' WHERE id=1;
UPDATE `shopUser` SET `account` = 'nguyenhai76123',`password`='1u23y7tdgsabdas',`firstname`='Hải'
,`lastname`='Phạm',`phonenumber`='01623476324',`address`='Quận 1, hồ chí minh',`email`='hai@gmail.com' WHERE id=2;
UPDATE `shopUser` SET `account` = 'thuyngan15',`password`='12gb2uygd7wqyd',`firstname`='Ngân'
,`lastname`='Phạm',`phonenumber`='06236823843',`address`='Quận 7, hồ chí minh',`email`='ngan@gmail.com' WHERE id=3;
UPDATE `shopUser` SET `account` = 'nguyennhat123',`password`='91273jsadhuwqe',`firstname`='Nhật'
,`lastname`='Nguyễn',`phonenumber`='0672638148',`address`='Quận 3, hồ chí minh',`email`='nhat9w3@gmail.com' WHERE id=4;
insert into `customer` values(1,4);
insert into `customer` values(7,1);
select * from `customer`;
UPDATE `customer` SET `cusTypeID`=2 where id=1;

INSERT INTO `customertype` VALUES (1,'BRONZE','none','none'),(2,'SILVER','none','none'),(3,'GOLD','none','none');
UPDATE `customertype` SET `status`='pause' where id=1;
select * from `customertype`;
delete from `customertype` where typeID = 4;
INSERT INTO `shopOwner` values(5,'shop','2021-1-1','2021-7-8','Ngừng Hoạt Động');
INSERT INTO `shopOwner` values(4,'sho122p','2021-2-1','2022-1-1','hoat dong');
select * from `shopOwner`;
UPDATE `shopOwner` SET `status`='pause' where shopOwnerID=4;
INSERT INTO `product` (`id`,`ownerID`, `amount`, `name`, `description`, `price`, `type`, `imageURL`) VALUES
(1, 3, 50, 'Samsung Galaxy Z Fold3', 'Galaxy Z Fold3 5G đánh dấu bước tiến mới của Samsung trong phân khúc điện thoại gập cao cấp khi được', 25000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/248284/samsung-galaxy-z-fold-3-silver-gc-org.jpg'),
(2, 3, 50, 'iPhone 11 64GB', 'Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11', 17000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-do-1-1-1-org.jpg'),
(3, 3, 50, 'iPhone 11 64GB', 'Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11', 17000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-do-1-1-1-org.jpg'),
(4, 3, 50, 'Vivo Y21', 'Vivo Y21 chiếc smartphone mang trong mình nhiều ưu điểm nổi bật như màn hình viền mỏng đẹp mắt', 4200000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/115343/vivo-y21-1-2.jpg'),
(5, 3, 50, 'Realme C11 (2021)', 'Các dòng smartphone giá rẻ ngày càng được ưa chuộng trên thị trường di động, nắm bắt được nhu cầu đó', 3000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/236257/realme-c11-2021-xam-1-2-org.jpg'),
(6, 3, 60, 'Apple MacBook Air M1 2020', 'Laptop Apple MacBook Air M1 2020 thuộc dòng laptop cao cấp sang trọng có cấu hình mạnh mẽ, chinh phụ', 30000000, 'Laptop', 'https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-silver-01-org.jpg'),
(1, 4, 60, 'Samsung Galaxy Tab S7 FE 4G', 'Samsung chính thức trình làng mẫu máy tính bảng có tên Galaxy Tab S7 FE, máy trang bị cấu hình mạnh ', 14000000, 'Máy tính bảng', 'https://cdn.tgdd.vn/Products/Images/522/240254/samsung-galaxy-tab-s7-fe-black-1-org.jpg'),
(2, 4, 100, 'iPad Air 4 Wifi Cellular', 'Chấn động giới công nghệ toàn cầu, khi một tablet lần đầu được tích hợp một trong những chipset hàng', 20000000, 'Máy tính bảng', 'https://cdn.tgdd.vn/Products/Images/522/228899/ipad-air-4-sky-blue-1020x680-org.jpg'),
(3, 4, 100, 'iPhone 13 mini', 'iPhone 13 mini được Apple ra mắt với hàng loạt nâng cấp về cấu hình và các tính năng hữu ích, lại có', 20000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-black-1.jpg'),
(4, 4, 125, 'Samsung Galaxy Z Flip3', 'Nối tiếp thành công của Galaxy Z Flip 5G, trong sự kiện Galaxy Unpacked vừa qua Samsung tiếp tục giớ', 25000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/248283/samsung-galaxy-z-flip-3-green-gc-org.jpg');
select * from `product`;
INSERT INTO `transaction`(`deliverAddr`,`discountCode`,`customerId`) VALUES ('KTX khu A ĐHQG TP. Hồ Chí Minh', 'ABCXYZ123', 1);
INSERT INTO `transaction`(`deliverAddr`,`discountCode`,`customerId`) VALUES ('KTX khu A ĐHQG ', 'JHJFTUINB', 1);
INSERT INTO `transaction`(`deliverAddr`,`discountCode`,`customerId`) VALUES ('KTX khu A ĐHQG TP. Hồ Chí Minh', '3244234', 1);
INSERT INTO `transaction`(`deliverAddr`,`discountCode`,`customerId`) VALUES ('KTX khu A ', '324234', 1);
INSERT INTO `transaction`(`deliverAddr`,`discountCode`,`customerId`) VALUES ('KTX khu A ĐHQG TP. Hồ Chí Minh', '3423', 1);
INSERT INTO `transaction`(`deliverAddr`,`discountCode`,`customerId`) VALUES ('KTX khu A ĐHQG TP. Hồ Chí Minh', '324324', 2);
INSERT INTO `transaction`(`deliverAddr`,`discountCode`,`customerId`) VALUES ('đường 12 quân 4, TP. Hồ Chí Minh', '5213d3s', 7);
select * from `transaction`;

INSERT INTO `order`(`transID`,`orderID`,`totalPrice`,`status`,`paymentTime`,`ownerID`,`productID`) 
					VALUES (4, 1, 112500, 'delivering',now(),3,1);
INSERT INTO `order` VALUES (4, 2, 113500, 'delivering',now(),3,2);
INSERT INTO `order` VALUES (4, 3, 113500, 'delivering',now(),3,3);
INSERT INTO `order` VALUES (6, 1, 113500, 'delivering',now(),4,4);
INSERT INTO `order` VALUES (6, 2, 123333, 'delivering',now(),4,2);
INSERT INTO `order` VALUES (6, 5, 222222, 'delivering',now(),3,2);
INSERT INTO `order` VALUES (7, 3, 122000, 'PENDING',now(),4,3,1);
select * from `order`;
INSERT INTO `order` VALUES (6, 4, 23500, 'processing',now(),3,4,1);

UPDATE `order` SET `status` = 'PENDING' WHERE `transID`>0;
UPDATE `order` SET `paymentTime` = null WHERE `transID`=4;

INSERT INTO `payment`(`transID`,`productID`,`customerID`,`ownerID`,`method`) values(4,1,1,3,'tien');
INSERT INTO `payment`(`transID`,`productID`,`customerID`,`ownerID`,`method`) values(4,2,1,3,'tien');
INSERT INTO `payment`(`transID`,`productID`,`customerID`,`ownerID`,`method`) values(4,3,1,3,'tien');
INSERT INTO `payment`(`transID`,`productID`,`customerID`,`ownerID`,`method`) values(6,4,1,4,'tien');
INSERT INTO `payment`(`transID`,`productID`,`customerID`,`ownerID`,`method`) values(6,2,1,4,'tien');
INSERT INTO `payment`(`transID`,`productID`,`customerID`,`ownerID`,`method`) values(6,2,1,3,'tien');
INSERT INTO `payment`(`transID`,`productID`,`customerID`,`ownerID`,`method`) values(6,3,1,3,'tien');
INSERT INTO `payment`(`transID`,`productID`,`customerID`,`ownerID`,`method`) values(6,4,2,3,'tien');

select * from `payment`;

INSERT INTO `company`(`companyName`) values('giao hang nhanh');
INSERT INTO `company`(`companyName`) values('grap');
INSERT INTO `company`(`companyName`) values('express');
select * from `company`;

INSERT INTO `contact` values(4,082173482,);
drop table contact;
UPDATE `company` SET `companyName` = 'FoddExpress' WHERE `companyID`=4;

# lấy danh sách các đơn hàng từ mới đến cũ(Chủ cửa hàng)
SELECT A.*,B.`name`
FROM `order` AS A join `product` AS B on A.`ownerID` = B.`ownerID` 
WHERE A.`ownerID`=3 AND A.`productID` = B.`id` AND A.`status` = 'success'
ORDER BY A.`paymentTime` DESC;

# xem tổng giao dịch của khách hàng(Admin)
SELECT B.`customerId`,SUM(A.`totalPrice`) AS TotalTransaction,COUNT(B.`customerId`) AS QuantityTransaction
FROM `order` AS A ,`transaction` AS B 
WHERE A.`transId` = B.`transId`
GROUP BY B.`customerId`
HAVING SUM(A.`totalPrice`) > 0
ORDER BY B.`customerId` ASC
;
select DAYOFMONTH(NOW());
select CURTIME();
select DATE_FORMAT(NOW(), '%d %m %Y %h %s') where MONTH(NOW()) = DATE_FORMAT('2021-11-23 4:01:01','%m');
SELECT MONTH(NOW());

# hien thi danh sach doanh thu cua tat ca shop tu moi den cu
SELECT A.`ownerID`, SUM(A.`totalPrice`) AS price, COUNT(A.`totalPrice`) AS quantity
FROM `order` AS A join `product` AS B on A.`ownerID` = B.`ownerID` 
WHERE A.`productID` = B.`id` AND A.`status` = 'success'
group by A.`ownerID` 
ORDER BY A.`paymentTime` DESC;


DELIMITER $$
DROP PROCEDURE IF EXISTS `GetOrder`$$
CREATE PROCEDURE GetOrder(price int)
BEGIN
	SELECT A.*,B.`name`
	FROM `order` AS A join `product` AS B on A.`ownerID` = B.`ownerID` 
	WHERE A.`ownerID`=3 AND A.`productID` = B.`id` AND A.`totalPrice` > price
	ORDER BY A.`paymentTime` DESC;
END; $$
DELIMITER ;
call GetOrder(112500);

DELIMITER $$
DROP PROCEDURE IF EXISTS `GetShopTop`$$
CREATE PROCEDURE GetShopTop(top int)
BEGIN
	SELECT A.`ownerID`, SUM(A.`totalPrice`) AS price, COUNT(A.`totalPrice`) AS quantity 
	FROM `order` AS A join `product` AS B on A.`ownerID` = B.`ownerID`
	WHERE A.`productID` = B.`id` AND A.`status` = 'success'
	group by A.`ownerID` 
	ORDER BY A.`totalPrice` ASC limit top;
END; $$
DELIMITER ;

call GetShopTop(3);


# lấy ra danh thông tin người dùng mua đơn hàng 
DELIMITER $$
DROP PROCEDURE IF EXISTS getID $$
CREATE PROCEDURE getID(Transactionid int,orderid int)
BEGIN
	DECLARE ID INT;
    set ID = (SELECT customerId FROM `transaction` WHERE `transId` = Transactionid);
	SELECT A.`totalPrice`,B.`firstname`,B.`lastname`,B.`phonenumber`,B.`address`
	FROM `order` AS A,`shopuser` AS B
	WHERE A.`transID`= Transactionid AND A.`orderID`= orderid AND B.`id`= ID;
END $$
DELIMITER ;
SELECT customerId FROM `transaction` WHERE `transId` = 4;
call getID(4,1) ; 
    
    
INSERT INTO `company`(`companyName`) values
('VNexpress'),('Grab');  
 select * from `company`;

#update `order` set `status` = 'delivering' where `orderID` > 0 and `transID` > 0;
delete deliver from deliver where dCompanyId=100;
INSERT INTO `deliver`(`dCompanyId`,`dTransactionId`,`dOrderId`,`startDate`,`endDate`)
values(100, 4, 1, '2021-11-18 13:41:51', null),
(100, 4, 2, '2021-11-19 13:41:51', null),
(100, 4, 3,'2021-11-20 13:41:51', null),
(101, 6, 1,'2021-11-21 13:41:51', null),
(101, 6, 2,'2021-11-24 13:41:51', null),
(101, 6, 5, '2021-11-24 13:41:51', null),
(101, 7, 1, '2021-11-24 13:41:51', null)
;
select * from `deliver`;

select * from `order`;
SELECT 'delivering' = (SELECT `status` FROM `order` WHERE `transID` = 6 AND `orderID` = 1);
;

#-----------------------------------------------------------------------------------
# lấy danh sách chủ cửa hàng
DELIMITER $$
DROP PROCEDURE IF EXISTS `getOwner`$$
CREATE PROCEDURE getOwner()
BEGIN
	SELECT A.*,B.`account`,B.`firstname`,B.`lastname`, B.`phonenumber`,B.`address`,B.`email`
	FROM `shopowner` AS A, `shopuser` AS B
	WHERE A.`shopOwnerID` = B.`id`
	ORDER BY A.`shopOwnerID` ASC;
END; $$
DELIMITER ;
call getOwner();
#--------------------------------------------------------------------------


INSERT INTO `contact` VALUES (1,'0983411642','268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh'),
(1,'0983412642','123 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội'),
(2,'0990099009','222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội'),
(3,'0123456789','14 Ký Con, Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh 700000'),
(4,'0987654321','360A Bến Vân Đồn, Phường 1, Quận 4, Hồ Chí Minh');

INSERT INTO `contact` VALUE(1,0981872634,'12 Võ Văn Ngân, Hồ Chí Minh'),
							(1,0862753643,'Đà Nẵng'),
							(1,0861275636,'Hà Nội');
INSERT INTO `contact` VALUE(2,0882637644,'Hồ Chí Minh'),
							(2,0861275636,'Hà Nội');
INSERT INTO `contact` VALUE(3,0369881623,'Đà Nẵng'),
							(3,0162584334,'Hà Nội');
INSERT INTO `contact` VALUE(3,0369881623,'Đà Nẵng'),
							(3,0162584334,'Hà Nội');
use dbs;
#----------------------------------------------------
# xem thông tin của các công ty giao hàng
update `company` set `companyName` = 'giao hàng nhanh' where `companyID` = 3;
update `company` set `companyName` = '' where `companyID` = 3;

DELIMITER $$
DROP PROCEDURE IF EXISTS `getCompany`$$
CREATE PROCEDURE getCompany()
BEGIN
	SELECT A.*, COUNT(B.`dCompanyId`) AS quantityBranch
	FROM `company` AS A,`contact` AS B
	WHERE A.`companyID` = B.`dCompanyId`
	group by A.`companyID` 
	ORDER BY A.`companyID` ASC;
END; $$
DELIMITER ;
call getCompany();
#-------------------------------------------------------------

# xem thông tin công ty giao hàng
DELIMITER $$
DROP PROCEDURE IF EXISTS `getCompanydetail`$$
CREATE PROCEDURE `getCompanydetail`(idcompany INT)
BEGIN
	DECLARE No_Exist CONDITION FOR SQLSTATE'45000';
	IF idcompany not in (SELECT `companyID` FROM `company`) then
		SIGNAL No_Exist
		SET MESSAGE_TEXT = 'companyID does not exist.';
	END IF;
	SELECT concat('0', B.`phoneNum`) AS phonenumb, B.`dCompanyAddr`
	FROM `company` AS A JOIN `contact` AS B ON A.`companyID` = B.`dCompanyId` 
	WHERE A.`companyID` = idcompany
	ORDER BY B.`dcompanyAddr` ASC;
END $$
DELIMITER ;
call getCompanydetail(2);
#-----------------------------------------------------------------------------------------------
# xem tổng giao dịch của chủ cửa hàng trong tháng
DELIMITER $$
DROP PROCEDURE IF EXISTS `getRevenueOwner`$$
CREATE PROCEDURE getRevenueOwner()
BEGIN
	SELECT S.`shopName`, A.`ownerID`, SUM(A.`totalPrice`) AS price, COUNT(A.`totalPrice`) AS quantity
	FROM `shopowner` AS S, `order` AS A join `product` AS B on A.`ownerID` = B.`ownerID` 
	WHERE A.`productID` = B.`id` AND A.`status` = 'SUCCESS' AND S.`shopOwnerID` = A.`ownerID`
    AND DATE_FORMAT(A.`paymentTime`,'%m%y') = DATE_FORMAT(NOW(),'%m%y')
	group by A.`ownerID` 
	ORDER BY SUM(A.`totalPrice`) DESC;
END; $$
DELIMITER ;
call getRevenueOwner();

#---------------------------------------------------------------------------------------------------
# xem tổng giao dịch của khách hàng trong tháng
DELIMITER $$
DROP PROCEDURE IF EXISTS `getRevenue`$$
CREATE PROCEDURE getRevenue()
BEGIN
	SELECT S.`account`, B.`customerId`,SUM(A.`totalPrice`) AS TotalTrans,COUNT(B.`customerId`) AS QuantityTrans
	FROM `shopuser` AS S,`order` AS A ,`transaction` AS B 
	WHERE A.`transID` = B.`transId` AND A.`status` = 'SUCCESS' AND S.`id` = B.`customerId`
    AND DATE_FORMAT(A.`paymentTime`,'%m%y') = DATE_FORMAT(NOW(),'%m%y')
	GROUP BY B.`customerId`
	HAVING SUM(A.`totalPrice`) > 0
	ORDER BY SUM(A.`totalPrice`) DESC;
END; $$
DELIMITER ;
call getRevenue();

# xem thông tin khách hàng
DELIMITER $$
DROP PROCEDURE IF EXISTS `getCustomer`$$
CREATE PROCEDURE getCustomer()
BEGIN
	SELECT S.`id`,S.`account`,S.`firstname`,S.`lastname`,S.`birthday`,S.`phonenumber`,S.`address`,S.`email`,B.`typename`
	FROM `shopuser` AS S,`customer` AS A JOIN `customertype` AS B
    ON A.`cusTypeID` = B.`typeID`
	WHERE S.`id` = A.`id`
	ORDER BY S.`id` DESC;
END; $$
DELIMITER ;
call getCustomer();


#------------------------------------End Success-------------------------------------------------------
use dbs;

#------------------------------------Success-------------------------------------------------------
DROP TRIGGER IF EXISTS before_status;
DELIMITER $$
CREATE TRIGGER before_status
BEFORE INSERT ON `deliver`
FOR EACH ROW
BEGIN
	DECLARE NO_INSERT CONDITION FOR SQLSTATE'45000';
	IF  ('PENDING' = (select `status` from `order` where `transID` = new.`dTransactionId` and `orderID` = new.`dOrderId`)) THEN 
		UPDATE `order` set `status` = 'PROCESSING' 
		where `transID` = new.`dTransactionId` and `orderID` = new.`dOrderId`;
	ELSE
		SIGNAL NO_INSERT
		SET MESSAGE_TEXT = 'Order has been processed.';
	END IF;	
END$$
DELIMITER ;
#INSERT  INTO `deliver` VALUES(1, 4, 2, NOW(), null);
 
DROP TRIGGER IF EXISTS after_status;
DELIMITER $$
CREATE TRIGGER after_status
BEFORE UPDATE ON `deliver`
FOR EACH ROW
BEGIN
	DECLARE NO_INSERT CONDITION FOR SQLSTATE'45000';
	IF new.`endDate` is not null and old.`endDate` is null 
    and ('PROCESSING' = (select `status` from `order` where `transID` = new.`dTransactionId` and `orderID` = new.`dOrderId`)) 
    THEN 
		UPDATE `order` set `status` = 'SUCCESS' 
		where `transID` = new.`dTransactionId` and `orderID` = new.`dOrderId`;
        UPDATE `order` set `paymentTime` = new.`endDate` 
		where `transID` = new.`dTransactionId` and `orderID` = new.`dOrderId` and `paymentTime` is null;
	ELSE 
		SIGNAL NO_INSERT
		SET MESSAGE_TEXT = 'Order has been delivered.';
	END IF;	
END$$
 DELIMITER ;
 #UPDATE `deliver` SET `endDate` = NOW() WHERE `dTransactionId` = 4 AND `dOrderId` = 2;
  #update `deliver` set `endDate` = null where `dTransactionId` = 4 and `dOrderId` = 2;
use dbs;
DROP TRIGGER IF EXISTS cancel_status;
DELIMITER $$
CREATE TRIGGER cancel_status
AFTER DELETE ON `deliver`
FOR EACH ROW
BEGIN
	DECLARE NO_INSERT CONDITION FOR SQLSTATE'45000';
	IF old.`endDate` is null and
    ('PROCESSING' = (select `status` from `order` where `transID` = old.`dTransactionId` and `orderID` = old.`dOrderId`)) THEN 
		UPDATE `order` set `status` = 'CANCEL' 
		where `transID` = old.`dTransactionId` and `orderID` = old.`dOrderId`;
	ELSE 
		SIGNAL NO_INSERT
		SET MESSAGE_TEXT = 'Order has been delivered.';
	END IF;	
END$$
DELIMITER ;

#---------------------------------End Success----------------------------------------------------
DELETE FROM `deliver` WHERE `dTransactionId` = 6;
update `order` set `status` = 'processing' where `transID` = 4;
update `order` set `status` = 'processing' where `transID` = 4;
update `order` set `status` = 'processing' where `transID` = 6 and `orderID` = 4;
update `order` set `status` = 'PENĐING' where `transID` = 6;

update `order` set `companyID` = 2 where `transID` = 6;

 update `deliver` set `endDate` = NOW() where `dTransactionId` = 6;
select ('processing' = (select `status` from `order` where `transID` = 4 and `orderID` = 1));
insert into `deliver` value(2,6,1,now(),null);
use dbs;


#-----------------------------------Success---------------------------------------------------
# lấy danh sách đơn hàng của công ty được yêu cầu giao hàng
DELIMITER $$
DROP PROCEDURE IF EXISTS `GetOrderbyCompany`$$
CREATE PROCEDURE GetOrderbyCompany(id int)
BEGIN
	DECLARE No_Exist CONDITION FOR SQLSTATE'45000';
	IF (id not in (SELECT `companyID` FROM `company`)) then
		SIGNAL No_Exist
		SET MESSAGE_TEXT = 'Invalid ID';
	END IF;
	SELECT A.*, B.`firstname`,B.`lastname`, B.`phonenumber`,C.`status`, C.`orderID`,C.`totalPrice`,C.`paymentTime`
	FROM `transaction` AS A, `shopuser` as B,`order` AS C
	WHERE A.`customerId` = B.`id` and A.`transId` = C.`transID` and C.`companyID` = id 
    and C.`status` != 'SUCCESS' and C.`status` != 'CANCEL'
    order by A.`transId` DESC, C.`orderID` ASC;
END; $$
DELIMITER ;
call GetOrderbyCompany(2);
#-----------------------------------End Success---------------------------------------------------

#tính tổng giá trị giao của đơn vị vận chuyển
DELIMITER $$
DROP FUNCTION IF EXISTS getdelivery $$
CREATE FUNCTION getdelivery(idcompany INT)
RETURNS DOUBLE
DETERMINISTIC
BEGIN
	DECLARE price DOUBLE DEFAULT NULL;
    set price = (SELECT SUM(`totalPrice`)
		FROM `order` AS A JOIN `company` AS B on A.`companyID` = B.`companyID`
		WHERE B.`companyID`= idcompany AND A.`status` = 'SUCCESS'
        group by B.`companyID`);
	IF (price is null) THEN
		RETURN 0;
	ELSE 
		RETURN ( price );
    END IF;
END $$
DELIMITER ;
select getdelivery(1) AS price;
