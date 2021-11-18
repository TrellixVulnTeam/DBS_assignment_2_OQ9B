import React from "react";
import Post from "../components/contactComponents/Posts";
import Title from "../components/title/title";
import GoodProduct from "../components/contactComponents/goodproduct";
import BigPost from "../components/PromotionComponent/BigPost";

const Promotion = () => {
  return (
    <div class="container promotion" style={{ "min-height": "70vh" }}>
      <Title title="BKIS khuyến mãi" />
      <div class="row">
        <div class="col-12 col-md-8 col-lg-8">
          <BigPost />
        </div>
        <div class="col-12 col-md-4 col-lg-4">
          <div class="row">
            <h3>Bài viết nổi bật</h3>
            <div class="col-8 col-md-5 col-lg-9 posts">
              <Post />
            </div>
            <h3>Sản phẩm nổi bật</h3>
            <div class="col-8 col-md-5 col-lg-9 items">
              <GoodProduct />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
