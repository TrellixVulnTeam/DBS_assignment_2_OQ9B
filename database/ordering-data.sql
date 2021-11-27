INSERT INTO `transaction` (`transId`, `deliverAddr`, `discountCode`, `customerId`) VALUES 
(1, 'KTX khu A ĐHQG TP. Hồ Chí Minh', 'SPPNOV310KA', 8008011),
(2, '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh', 'SPPNOV310KN', 8008241),
(3, 'VRJ4+65C, Đông Hoà, Dĩ An, Bình Dương', 'SPPNOV315KALL', 8008512),
(4, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội', 'SPPNOV350K', 8008534),
(5, '91 Chùa Láng, Láng Thượng, Đống Đa, Hà Nội', 'SPPNOV3FSSA', 8008068),
(6, '10-12 Đ. Đinh Tiên Hoàng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh', 'SPPNOV3FSSN', 8008524);



INSERT INTO `order` (`transID`, `orderID`, `totalPrice`, `status`, `paymentTime`, `ownerID`, `productID`, `companyID`) VALUES
(123, 1, 25000, 'CANCEL', '0000-00-00 00:00:00', 14, 12, 1),
(151, 2, 36000, 'SUCCESS', '2021-11-12 01:20:15', 15, 53, 2),
(254, 3, 1500000, 'SUCCESS', '2021-11-15 15:16:25', 124, 242, 3),
(334, 35, 160000, 'SUCCESS', '2021-11-15 20:22:10', 41, 42, 1),
(445, 50, 880000, 'CANCEL', '0000-00-00 00:00:00', 1, 54, 4),
(6667, 60, 109000, 'CANCEL', '0000-00-00 00:00:00', 8, 64, 4), 
(7889, 88, 112500, 'CANCEL', '0000-00-00 00:00:00', 343, 5, 5),
(9999, 152, 380000, 'SUCCESS', '2021-11-20 11:12:10', 63, 43, 5);

INSERT INTO `company` (`companyId`, `companyName`) VALUES
(1, 'HCMUT'),
(2, 'GHN'),
(3, 'Grab'),
(4, 'GoViet'),
(5, 'GoGo');

INSERT INTO `deliver` (`dCompanyId`, `dTransactionId`, `dOrderId`, `dOrderStatus`, `startDate`, `endDate`) VALUES 
(1, 123, 1, 'PENDING', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1415, 2, 'SUCCESS', '2021-11-05 14:53:27', '2021-11-15 16:20:27'),
(2, 1525, 54, 'PROCESSING', '2021-11-16 08:20:55', '0000-00-00 00:00:00'),
(3, 1855, 656, 'PROCESSING', '2021-10-16 11:20:48', '0000-00-00 00:00:00'),
(3, 4544, 696, 'PROCESSING', '2021-10-20 13:10:01', '0000-00-00 00:00:00'),
(3, 65466, 778, 'SUCCESS', '2021-11-01 16:30:00', '2021-11-15 13:12:11'),
(2, 65656, 6677, 'SUCCESS', '2020-11-25 16:12:11', '2021-11-25 11:12:13');

INSERT INTO `contact` (`dCompanyId`, `phoneNum`, `dCompanyAddr`) VALUES 
(1, '0983411642', '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh'),
(2, '0990099009', '222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội'),
(3, '0123456789', '14 Ký Con, Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh 700000'),
(4, '0987654321', '360A Bến Vân Đồn, Phường 1, Quận 4, Hồ Chí Minh'),
(5, '0783338891', '200 Đ. Số 11, Linh Xuân, Thủ Đức, Thành phố Hồ Chí Minh');

