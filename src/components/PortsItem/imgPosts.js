import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FeatureWrapper } from "../../container/FeatureWrapper";
import { Link } from "react-router-dom";
import DayPost from "./DayPost";
import { PostsTitle } from "./DayPost";
import { PostsContent } from "./DayPost";

function ImgPosts() {
  return (
    <div>
      <FeatureWrapper>
        <Link to="/posts" style={{ color: "black", textDecoration: "none" }}>
          <div className="card mb-3 postcard" style={{ width: "840px" }}>
            <div className="row no-gutters">
              <div className="col-md-4 col-lg-4">
                <img
                  src="https://nhaccutienmanh.vn/wp-content/uploads/2020/07/cap-nhat-bang-gia-dan-piano-yamaha-chinh-hang-moi-nhat-1-2.jpg"
                  alt="advertise"
                  className="card-img-left"
                />
              </div>
              <div className="col-md-8 col-lg-8">
                  <div className="card-body d-flex flex-row-reverse justify-content-center">
                    <PostsTitle>Những sản phẩm đàn Piano</PostsTitle>
                  </div>
                  <DayPost />
                <div className="card-body d-flex flex-row-reverse justify-content-center">
                  <PostsContent>
                    Piano Yamaha được xem là nhạc cụ được sử dụng thịnh thành rộng rãi ở mọi thị trường. Với thiết kế đa dạng, bắt mắt cùng âm thanh chất lượng và công nghệ luôn đi đầu.
                  </PostsContent>
                </div>
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
                  src="https://nhaccutienmanh.vn/wp-content/uploads/2020/02/mach-nho-kinh-nghiem-mua-trong-tre-em-cuc-ky-huu-ich.jpg"
                  alt="advertise"
                  className="card-img-left"
                />
              </div>
              <div className="col-md-8 col-lg-8">
                <div className="card-body d-flex flex-row-reverse justify-content-center">
                  <PostsTitle>Những sản phẩm trống</PostsTitle>
                </div>
                  <DayPost />
                <div className="card-body d-flex flex-row-reverse justify-content-center">
                  <PostsContent>
                    Trống, nhạc cụ đem đến cho người chơi nhiều cung bậc cảm xúc. Chơi trống là bộ môn thú vị phù hợp với rất nhiều độ tuổi đặc biệt là trẻ nhỏ. 
                    Chúng giúp kích thích sự phát triển của não bộ, thông minh nhạy bén, tự tin.
                  </PostsContent>
                </div>
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
                  src="https://nhaccutienmanh.vn/wp-content/uploads/2019/12/huong-dan-lua-chon-day-dan-violin.png"
                  alt="advertise"
                  className="card-img-left"
                />
              </div>
              <div className="col-md-8 col-lg-8">
                <div className="card-body d-flex flex-row-reverse justify-content-center">
                  <PostsTitle>Những sản phẩm đàn Violin</PostsTitle>
                </div>
                  <DayPost />
                <div className="card-body d-flex flex-row-reverse justify-content-center">
                  <PostsContent>
                    Dây đàn violin nào là tốt nhất? Điểm cốt lõi là khi lắp các loại dây violin khác nhau sẽ tạo ra những âm thanh khác nhau. 
                    Chính vì vậy nhu cầu của người chơi violin là điểm quyết định để nên lựa chọn loại dây nào.
                  </PostsContent>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </FeatureWrapper>
    </div>
  );
}

export default ImgPosts;
