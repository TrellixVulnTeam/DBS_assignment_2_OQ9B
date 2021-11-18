CREATE TABLE `transaction` (
  `transactionId` varchar(9) NOT NULL,
  `deliverAddress` varchar(255) NOT NULL,
  `promotionCode` varchar(255),
  `customerId` varchar(9) NOT NULL,
  CONSTRAINT `transaction_pk` PRIMARY KEY (`transactionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `transaction` (`transactionId`, `deliverAddress`, `promotionCode`, `customerId`)
VALUES ('100000', 'KTX khu A ĐHQG TP. Hồ Chí Minh', 'ABCXYZ123', '100210');

INSERT INTO `transaction` (`transactionId`, `deliverAddress`, `promotionCode`, `customerId`)
VALUES ('100090', 'KTX khu A ĐHQG TP. Hồ Chí Minh', 'ABCXYZ123', '100211');

CREATE TABLE `order` (
  `oTransactionId` varchar(9) NOT NULL,
  `orderId` varchar(9) NOT NULL,
  `totalPrice` double precision(10,2) NOT NULL,
  `orderStatus` varchar(255) NOT NULL,
  `paymentTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT `order_pk` PRIMARY KEY (`oTransactionId`, `orderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `order` ADD CONSTRAINT `included` FOREIGN KEY (`oTransactionId`) REFERENCES `transaction`(`transactionId`) ON DELETE CASCADE; 

INSERT INTO `order` (`oTransactionId`, `orderId`, `totalPrice`, `orderStatus`)
VALUES ('100090', '100134', 112500, 'Đang giao');

CREATE TABLE `company` (
	  `companyId` varchar(9) NOT NULL,
    `companyName` varchar(255) NOT NULL,
    CONSTRAINT `company_pk` PRIMARY KEY (`companyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO company (companyId, companyName)
VALUES (
    '100902',
    'HCMUT'
  );
  
CREATE TABLE `deliver` (
  `dCompanyId` varchar(9) NOT NULL,
  `dTransactionId` varchar(9) NOT NULL,
  `dOrderId` varchar(9) NOT NULL,
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
    '100902',
    '100090',
    '100134',
    'Đang giao',
    '2021-11-16',
    '2021-11-18'
  );


CREATE TABLE `contact` (
	  `dCompanyId` varchar(9) NOT NULL,
    `phoneNum` varchar(11) NOT NULL,
    `dCompanyAddr` varchar(255) NOT NULL,
    CONSTRAINT `contact_pk` PRIMARY KEY (`dCompanyId`, `phoneNum`),
    FOREIGN KEY (`dCompanyId`) REFERENCES `company`(`companyId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO contact (dCompanyId, phoneNum, dCompanyAddr)
VALUES (
    '100902',
    '0983411642',
    'Ho Chi Minh city'
  );
INSERT INTO contact (dCompanyId, phoneNum, dCompanyAddr)
VALUES (
    '100902',
    '076357378',
    'Ho Chi Minh city'
  );
