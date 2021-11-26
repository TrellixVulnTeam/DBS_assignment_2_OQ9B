INSERT INTO `transaction` (`transactionId`, `deliverAddress`, `promotionCode`, `customerId`) VALUES 
('539030', 'KTX khu A ĐHQG TP. Hồ Chí Minh', 'SPPNOV310KA', '8008011'),
('178119', '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh', 'SPPNOV310KN', '8008241'),
('222821', 'VRJ4+65C, Đông Hoà, Dĩ An, Bình Dương', 'SPPNOV315KALL', '8008512'),
('397582', '1 Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội', 'SPPNOV350K', '8008534'),
('809514', '91 Chùa Láng, Láng Thượng, Đống Đa, Hà Nội', 'SPPNOV3FSSA', '8008068'),
('606991', '10-12 Đ. Đinh Tiên Hoàng, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh', 'SPPNOV3FSSN', '8008524');

INSERT INTO `order` (`oTransactionId`, `orderId`, `totalPrice`, `orderStatus`, `paymentTime`) VALUES
(155222, 329132, 25000, 'CANCEL', '0000-00-00 00:00:00'),
(664327, 927522, 36000, 'SUCCESS', '2021-11-12 01:20:15'),
(473169, 149078, 1500000, 'SUCCESS', '2021-11-15 15:16:25'),
(108294, 552616, 160000, 'SUCCESS', '2021-11-15 20:22:10'),
(397582, 235254, 880000, 'CANCEL', '0000-00-00 00:00:00'),
(809514, 794572, 109000, 'CANCEL', '0000-00-00 00:00:00'), 
(713192, 101103, 112500, 'CANCEL', '0000-00-00 00:00:00'),
(606991, 661435, 380000, 'SUCCESS', '2021-11-20 11:12:10');

INSERT INTO company (companyId, companyName) VALUES
('623677', 'HCMUT'),
('976929', 'GHN'),
('888453', 'Grab'),
('959717', 'GoViet'),
('280477', 'GoGo');

INSERT INTO deliver (dCompanyId, dTransactionId, dOrderId, dOrderStatus, startDate, endDate) VALUES 
(623677, 713192, 101103, 'PENDING', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(959717, 155222, 329132, 'SUCCESS', '2021-11-05 14:53:27', '2021-11-15 16:20:27'),
(976929, 664327, 927522, 'PROCESSING', '2021-11-16 08:20:55', '0000-00-00 00:00:00'),
(888453, 782733, 163178, 'PROCESSING', '2021-10-16 11:20:48', '0000-00-00 00:00:00'),
(888453, 470857, 333561, 'PROCESSING', '2021-10-20 13:10:01', '0000-00-00 00:00:00'),
(888453, 928977, 980454, 'SUCCESS', '2021-11-01 16:30:00', '2021-11-15 13:12:11'),
(976929, 335978, 155256, 'SUCCESS', '2020-11-25 16:12:11', '2021-11-25 11:12:13');

INSERT INTO contact (dCompanyId, phoneNum, dCompanyAddr) VALUES 
(623677, '0983411642', '268 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh'),
(976929, '0990099009', '222 Trần Duy Hưng, Trung Hòa, Cầu Giấy, Hà Nội'),
(888453, '0123456789', '14 Ký Con, Phường Nguyễn Thái Bình, Quận 1, Thành phố Hồ Chí Minh 700000'),
(959717, '0987654321', '360A Bến Vân Đồn, Phường 1, Quận 4, Hồ Chí Minh'),
(280477, '0783338891', '200 Đ. Số 11, Linh Xuân, Thủ Đức, Thành phố Hồ Chí Minh');

