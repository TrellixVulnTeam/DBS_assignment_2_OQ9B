import React from "react";
import Title from "../components/title/title";
//import { Form } from "react-bootstrap";
import Post from "../components/contactComponents/Posts";
import GoodProduct from "../components/contactComponents/goodproduct";
import ImgPosts from "../components/PortsItem/imgPosts";

export default class posts extends React.Component {
  render() {
    return (
      <div className="container contact">
        <Title title="Bài Viết" />
        <div className="row">
              <div className="col-12 col-md-8 col-lg-8">
                <ImgPosts/>
              </div>

            <div className="col-12 col-md-4 col-lg-4">
              <div className="row">
                <h3>Bài viết nổi bật</h3>
                <div className="col-8 col-md-5 col-lg-9 posts">
                  <Post />
                </div>
                <h3>Sản phẩm nổi bật</h3>
                <div className="col-8 col-md-5 col-lg-9 items">
                  <GoodProduct />
                </div>
              </div>
           </div>
        </div>
      </div>
    );
  }
}
