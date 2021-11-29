create database dbs;

use dbs;

SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `ID_admin` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID_admin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `promotion`;
CREATE TABLE `promotion` (
  `pName` varchar(255) NOT NULL,
  `pSerial` varchar(9) NOT NULL,
  `pCode` varchar(9) NOT NULL,
  `pCustomerTypeCode` varchar(9) NOT NULL,
  PRIMARY KEY (`pName`,`pSerial`,`pCode`,`pCustomerTypeCode`),
  CONSTRAINT `promotion_ibfk_1` FOREIGN KEY (`pSerial`) REFERENCES `code` (`serial`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `sale`;
CREATE TABLE `sale` (
  `code` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `sName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` datetime NOT NULL,
  `sID_admin` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `sID_shop` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`code`),
  CONSTRAINT `sale_ibfk_1` FOREIGN KEY (`sID_admin`) REFERENCES `admin` (`ID_admin`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `own`;
CREATE TABLE `own` (
  `oName` varchar(255) NOT NULL,
  `oSerial` varchar(9) NOT NULL,
  `oCode` varchar(9) NOT NULL,
  `oCustomerCode` varchar(9) NOT NULL,
  `used` int NOT NULL,
  PRIMARY KEY (`oName`,`oSerial`,`oCode`,`oCustomerCode`),
  CONSTRAINT `own_ibfk_1` FOREIGN KEY (`oSerial`) REFERENCES `code` (`serial`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `code`;
CREATE TABLE `code` (
  `cName` varchar(255) NOT NULL,
  `serial` varchar(9) NOT NULL,
  `cCode` varchar(9) COLLATE utf8_unicode_ci NOT NULL,
  `value` float NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`cName`,`serial`,`cCode`),
  KEY `cSerial` (`serial`),
  CONSTRAINT `code_ibfk_1` FOREIGN KEY (`cCode`) REFERENCES `sale` (`code`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
