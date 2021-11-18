import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FeatureWrapper } from "../../container/FeatureWrapper";
import { Link } from "react-router-dom";
import { BigPostContent } from "./BigPostContent";
import { BigPostTitle } from "./BigPostContent";
function BigPost() {
  return (
    <div>
      <FeatureWrapper>
        <Link to="/posts" style={{ color: "black", textDecoration: "none" }}>
          <div className="card mb-3 postcard" style={{ width: "840px" }}>
            <div className="row no-gutters">
              <div className="col-md-4 col-lg-4">
                <img
                  src="https://linhdam.co/wp-content/uploads/2020/10/2-3-833x540.png"
                  alt="advertise"
                  className="card-img-left"
                />
              </div>
              <div className="col-md-8 col-lg-8">
                <BigPostTitle>Truyền thông tiếp thị tích hợp và hòa nhạc: Có gì chung?</BigPostTitle>
                <BigPostContent>Tưởng tượng bạn đang tham dự một buổi hòa nhạc. Giai điệu du dương
                 không đến từ một nhạc cụ riêng lẻ mà đến từ SỰ CỘNG HƯỞNG của tất cả các loại nhạc cụ...</BigPostContent>
              </div>
            </div>
          </div>
        </Link>
      </FeatureWrapper>
      <FeatureWrapper>
        <Link to="/posts" style={{ color: "black", textDecoration: "none" }}>
          <div className="card mb-3 postcard" style={{ width: "840px" }}>
            <div className="row no-gutters">
              <div className="col-md-4 col-lg-4">
                <img
                  src="https://kingmarketing.vn/wp-content/uploads/2021/08/img_610e863d4665e-512x375.jpg"
                  alt="advertise"
                  className="card-img-left"
                />
              </div>
              <div className="col-md-8 col-lg-8">
                <BigPostTitle>Kinh doanh nhạc cụ âm nhạc hiệu quả thu hút nhất</BigPostTitle>
                <BigPostContent>Kinh doanh nhạc cụ thường không quá phổ biến nhưng đó là một hướng đi mở cho nhiều bạn trẻ, đặc biệt là các bạn có niềm đam mê âm nhạc và có ít nhiều có những năng khiếu về loại hình này...</BigPostContent>
              </div>
            </div>
          </div>
        </Link>
      </FeatureWrapper>
      <FeatureWrapper>
        <Link to="/posts" style={{ color: "black", textDecoration: "none" }}>
          <div className="card mb-3 postcard" style={{ width: "840px" }}>
            <div className="row no-gutters">
              <div className="col-md-4 col-lg-4">
                <img
                  src="https://sikido.vn/uploads/source/thietkewebsite/header-musical-instruments-1200x480-11b4194ce5ebc4e5111cc71945955eeb.jpg"
                  alt="advertise"
                  className="card-img-left"
                />
              </div>
              <div className="col-md-8 col-lg-8">
                <BigPostTitle>Thu hút khách hàng nhờ website bán nhạc cụ chuyên nghiệp, chất lượng</BigPostTitle>
                <BigPostContent>Nhạc cụ có công dụng tạo nên âm nhạc, tạo sức lan tỏa rộng rãi và truyền cảm hứng trong công chúng. Sự đa dạng về 
                nhạc cụ cũng sẽ tạo ra một sự đa dạng về người chơi và người thưởng thức âm nhạc...</BigPostContent>
              </div>
            </div>
          </div>
        </Link>
      </FeatureWrapper>
    </div>
  );
}

export default BigPost;
