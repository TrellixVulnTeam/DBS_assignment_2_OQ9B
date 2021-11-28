INSERT INTO `transaction` (`transId`, `deliverAddr`, `discountCode`, `customerId`) VALUES 
(1, 'KTX khu A ĐHQG TP. Hồ Chí Minh', 'SPPNOV310KA', 1),
(2, '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh', 'SPPNOV310KN', 2),
(3, 'VRJ4+65C, Đông Hoà, Dĩ An, Bình Dương', 'SPPNOV315KALL', 3),
(4, '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội', 'SPPNOV350K', 4),
(5, '91 Chùa Láng, Láng Thượng, Đống Đa, Hà Nội', 'SPPNOV3FSSA', 5),
(6, '10-12 Đ. Đinh Tiên Hoàng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh', 'SPPNOV3FSSN', 6);



INSERT INTO `order` (`transID`, `orderID`, `totalPrice`, `status`, `paymentTime`, `ownerID`, `productID`, `companyID`) VALUES
(1, 1, 25000, 'CANCEL', '0000-00-00 00:00:00', 1, 1, 1),
(2, 2, 36000, 'SUCCESS', '2021-11-12 01:20:15', 2, 2, 2),
(3, 3, 1500000, 'SUCCESS', '2021-11-15 15:16:25', 3, 3, 3),
(4, 4, 160000, 'SUCCESS', '2021-11-15 20:22:10', 4, 4, 1),
(5, 5, 880000, 'CANCEL', '0000-00-00 00:00:00', 1, 5, 4),
(6, 6, 109000, 'CANCEL', '0000-00-00 00:00:00', 2, 6, 4);

INSERT INTO `company` (`companyId`, `companyName`) VALUES
(1, 'HCMUT'),
(2, 'GHN'),
(3, 'Grab'),
(4, 'GoViet'),
(5, 'GoGo');

INSERT INTO `deliver` (`dCompanyId`, `dTransactionId`, `dOrderId`, `dOrderStatus`, `startDate`, `endDate`) VALUES 
(1, 1, 1, 'PENDING', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, 2, 'SUCCESS', '2021-11-05 14:53:27', '2021-11-15 16:20:27'),
(2, 3, 3, 'PROCESSING', '2021-11-16 08:20:55', '0000-00-00 00:00:00'),
(5, 4, 4, 'PROCESSING', '2021-10-16 11:20:48', '0000-00-00 00:00:00'),
(3, 5, 5, 'PROCESSING', '2021-10-20 13:10:01', '0000-00-00 00:00:00'),
(3, 6, 6, 'SUCCESS', '2021-11-01 16:30:00', '2021-11-15 13:12:11');

INSERT INTO `contact` (`dCompanyId`, `phoneNum`, `dCompanyAddr`) VALUES 
(1, '0983411642', '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh'),
(2, '0990099009', '222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội'),
(3, '0123456789', '14 Ký Con, Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh 700000'),
(4, '0987654321', '360A Bến Vân Đồn, Phường 1, Quận 4, Hồ Chí Minh'),
(5, '0783338891', '200 Đ. Số 11, Linh Xuân, Thủ Đức, Thành phố Hồ Chí Minh');

