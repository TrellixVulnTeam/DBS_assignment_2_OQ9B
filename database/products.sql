

INSERT INTO `shopuser` (`id`, `account`, `password`, `firstname`, `lastname`, `birthday`, `phonenumber`, `address`, `email`) VALUES
(1, 'bhtd', '2555', 'bui', 'dat', '2021-11-21', '036999', 'Hamy', 'bui@gmail.com'),
(2, 'bhtd2000', '14042023', 'Bui', 'Dat', '2000-04-14', '0353297204', 'Hamy Quang TrI', 'buihuutiendat2017@gmail.com');

INSERT INTO `shopowner` (`shopOwnerID`, `shopName`, `startDate`, `endDate`, `status`) VALUES
(1, 'huhu', '2021-10-08', '2026-11-02', 'Close'),
(2, 'Datbui', '2021-11-01', '2025-12-12', 'Open');

INSERT INTO `product` (`id`, `ownerID`, `amount`, `name`, `description`, `price`, `type`, `imageURL`) VALUES
(1, 2, 50, 'Samsung Galaxy Z Fold3', 'Galaxy Z Fold3 5G đánh dấu bước tiến mới của Samsung trong phân khúc điện thoại gập cao cấp khi được', 25000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/248284/samsung-galaxy-z-fold-3-silver-gc-org.jpg'),
(3, 2, 50, 'iPhone 11 64GB', 'Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11', 17000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-do-1-1-1-org.jpg'),
(4, 2, 50, 'iPhone 11 64GB', 'Tháng 09/2019, Apple đã chính thức trình làng bộ 3 siêu phẩm iPhone 11, trong đó phiên bản iPhone 11', 17000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-do-1-1-1-org.jpg'),
(5, 2, 50, 'Vivo Y21', 'Vivo Y21 chiếc smartphone mang trong mình nhiều ưu điểm nổi bật như màn hình viền mỏng đẹp mắt', 4200000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/115343/vivo-y21-1-2.jpg'),
(6, 2, 50, 'Realme C11 (2021)', 'Các dòng smartphone giá rẻ ngày càng được ưa chuộng trên thị trường di động, nắm bắt được nhu cầu đó', 3000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/236257/realme-c11-2021-xam-1-2-org.jpg'),
(7, 2, 60, 'Apple MacBook Air M1 2020', 'Laptop Apple MacBook Air M1 2020 thuộc dòng laptop cao cấp sang trọng có cấu hình mạnh mẽ, chinh phụ', 30000000, 'Laptop', 'https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-silver-01-org.jpg'),
(9, 1, 60, 'Samsung Galaxy Tab S7 FE 4G', 'Samsung chính thức trình làng mẫu máy tính bảng có tên Galaxy Tab S7 FE, máy trang bị cấu hình mạnh ', 14000000, 'Máy tính bảng', 'https://cdn.tgdd.vn/Products/Images/522/240254/samsung-galaxy-tab-s7-fe-black-1-org.jpg'),
(10, 2, 100, 'iPad Air 4 Wifi Cellular', 'Chấn động giới công nghệ toàn cầu, khi một tablet lần đầu được tích hợp một trong những chipset hàng', 20000000, 'Máy tính bảng', 'https://cdn.tgdd.vn/Products/Images/522/228899/ipad-air-4-sky-blue-1020x680-org.jpg'),
(12, 1, 100, 'iPhone 13 mini', 'iPhone 13 mini được Apple ra mắt với hàng loạt nâng cấp về cấu hình và các tính năng hữu ích, lại có', 20000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-black-1.jpg'),
(13, 1, 125, 'Samsung Galaxy Z Flip3', 'Nối tiếp thành công của Galaxy Z Flip 5G, trong sự kiện Galaxy Unpacked vừa qua Samsung tiếp tục giớ', 25000000, 'Điện thoại', 'https://cdn.tgdd.vn/Products/Images/42/248283/samsung-galaxy-z-flip-3-green-gc-org.jpg');
