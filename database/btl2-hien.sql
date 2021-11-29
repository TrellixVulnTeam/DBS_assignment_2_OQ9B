CREATE TABLE `transaction` (
  `transactionId` int(11) NOT NULL AUTO_INCREMENT,
  `deliverAddress` varchar(255) NOT NULL,
  `promotionCode` varchar(255),
  `customerId` varchar(9) NOT NULL,
  CONSTRAINT `transaction_pk` PRIMARY KEY (`transactionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET @@auto_increment_increment = 1;

INSERT INTO `transaction` (`deliverAddress`, `promotionCode`, `customerId`)
VALUES ('KTX khu A ĐHQG TP. Hồ Chí Minh', 'ABCXYZ123', '100210');

INSERT INTO `transaction` (`transactionId`, `deliverAddress`, `promotionCode`, `customerId`)
VALUES ('100090', 'KTX khu A ĐHQG TP. Hồ Chí Minh', 'ABCXYZ123', '100211');

CREATE TABLE `order` (
  `oTransactionId` int(11) NOT NULL,
  `orderId` int(11) NOT NULL,
  `totalPrice` double precision(10,2) NOT NULL,
  `orderStatus` varchar(255) NOT NULL,
  `paymentTime` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `order_pk` PRIMARY KEY (`oTransactionId`, `orderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `order` ADD CONSTRAINT `included` FOREIGN KEY (`oTransactionId`) REFERENCES `transaction`(`transactionId`) ON DELETE CASCADE; 

INSERT INTO `order` (`oTransactionId`, `orderId`, `totalPrice`, `orderStatus`)
VALUES (1, 1, 112500, 'Đang giao');

CREATE TABLE `company` (
	  `companyId` int(11) NOT NULL AUTO_INCREMENT,
    `companyName` varchar(255) NOT NULL,
    CONSTRAINT `company_pk` PRIMARY KEY (`companyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO company (companyName)
VALUES (
    'HCMUT'
  );
  
CREATE TABLE `deliver` (
  `dCompanyId` int(11) NOT NULL,
  `dTransactionId` int(11) NOT NULL,
  `dOrderId` int(11) NOT NULL,
  `dOrderStatus` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  CONSTRAINT `deliver_pk` PRIMARY KEY (`dCompanyId`, `dTransactionId`, `dOrderId`),
  FOREIGN KEY (`dTransactionId`, `dOrderId`) REFERENCES `order`(`oTransactionId`, `orderId`) ON DELETE CASCADE,
  FOREIGN KEY (`dCompanyId`) REFERENCES `company`(`companyId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO deliver (
    dCompanyId,
    dTransactionId,
    dOrderId,
    dOrderStatus,
    startDate,
    endDate
  )
VALUES (
    1,
    1,
    1,
    'Đang giao',
    '2021-11-16',
    '2021-11-18'
  );


CREATE TABLE `contact` (
	  `dCompanyId` int(11) NOT NULL,
    `phoneNum` varchar(11) NOT NULL,
    `dCompanyAddr` varchar(255) NOT NULL,
    CONSTRAINT `contact_pk` PRIMARY KEY (`dCompanyId`, `phoneNum`),
    FOREIGN KEY (`dCompanyId`) REFERENCES `company`(`companyId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO contact (dCompanyId, phoneNum, dCompanyAddr)
VALUES (
    1,
    '0983411642',
    'Ho Chi Minh city'
  );
INSERT INTO contact (dCompanyId, phoneNum, dCompanyAddr)
VALUES (
    1,
    '076357378',
    'Ho Chi Minh city'
  );
