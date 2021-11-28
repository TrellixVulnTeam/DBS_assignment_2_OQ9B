INSERT INTO shopuser (
    id,
    account,
    password,
    firstname,
    lastname,
    birthday,
    phonenumber,
    address,
    email
  )
VALUES (
    3,
    'nnh',
    '123456',
    'Nguyễn Ngọc',
    'Hiển',
    '2001-03-20',
    '1234567890',
    'Thua Thien Hue',
    'hien@gmail.com'
  );

INSERT INTO `customertype` (`typeID`, `typename`, `content`, `request`) VALUES
(1,'BRONZE','none','none'),
(2,'SILVER','none','none'),
(3,'GOLD','none','none');

INSERT INTO customer (id, cusTypeID)
VALUES (
    3,
    1
  );
  
  
INSERT INTO `transaction` (`transId`, `deliverAddr`, `discountCode`, `customerId`) VALUES 
(1, 'KTX khu A ĐHQG TP. Hồ Chí Minh', 'SPPNOV310KA', 3),
(2, '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh', 'SPPNOV310KN', 3),
(3, 'VRJ4+65C, Đông Hoà, Dĩ An, Bình Dương', 'SPPNOV315KALL', 3),
(4, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội', 'SPPNOV350K', 3),
(5, '91 Chùa Láng, Láng Thượng, Đống Đa, Hà Nội', 'SPPNOV3FSSA', 3),
(6, '10-12 Đ. Đinh Tiên Hoàng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh', 'SPPNOV3FSSN', 3);



INSERT INTO `order` (`transID`, `orderID`, `totalPrice`, `status`, `paymentTime`, `ownerID`, `productID`, `companyID`) VALUES
(1, 1, 25000000, 'PENDING', '0000-00-00 00:00:00', 1, 1, 1),
(1, 2, 36000000, 'SUCCESS', '2021-11-12 01:20:15', 2, 7, 2),
(1, 3, 15500000, 'SUCCESS', '2021-11-15 15:16:25', 1, 3, 3),
(2, 4, 16000000, 'PROCESSING', '2021-11-15 20:22:10', 2, 4, 1),
(2, 5, 8800000, 'PENDING', '0000-00-00 00:00:00', 1, 5, 4),
(3, 6, 1090000, 'CANCEL', '0000-00-00 00:00:00', 2, 6, 4);

INSERT INTO `company` (`companyId`, `companyName`) VALUES
(1, 'HCMUT'),
(2, 'GHN'),
(3, 'Grab'),
(4, 'GoViet'),
(5, 'GoGo');

INSERT INTO `deliver` (`dCompanyId`, `dTransactionId`, `dOrderId`, `startDate`, `endDate`) VALUES 
(1, 1, 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 2, '2021-11-05 14:53:27', '2021-11-15 16:20:27'),
(2, 1, 3, '2021-11-16 08:20:55', '0000-00-00 00:00:00'),
(5, 2, 4, '2021-10-16 11:20:48', '0000-00-00 00:00:00'),
(3, 2, 5, '2021-10-20 13:10:01', '0000-00-00 00:00:00'),
(3, 3, 6, '2021-11-01 16:30:00', '2021-11-15 13:12:11');

INSERT INTO `contact` (`dCompanyId`, `phoneNum`, `dCompanyAddr`) VALUES 
(1, '0983411642', '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh'),
(2, '0990099009', '222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội'),
(3, '0123456789', '14 Ký Con, Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh 700000'),
(4, '0987654321', '360A Bến Vân Đồn, Phường 1, Quận 4, Hồ Chí Minh'),
(5, '0783338891', '200 Đ. Số 11, Linh Xuân, Thủ Đức, Thành phố Hồ Chí Minh');




