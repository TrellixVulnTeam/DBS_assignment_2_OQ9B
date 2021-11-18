import React from "react";
import Title from "../components/title/title";
import { Form } from "react-bootstrap";
import Post from "../components/contactComponents/Posts";
import GoodProduct from "../components/contactComponents/goodproduct";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div class="container contact">
          <Title title="Liên hệ" />
          <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
              <h4 className="py-3">Thông tin và giới thiệu về cửa hàng</h4>
              <p className="py-1">
                BK Music là nhà phân phối nhạc cụ và phụ kiện âm nhạc hàng đầu ở Việt Nam hiện nay. Danh mục sản phẩm của BK Music vô cùng đa dạng từ Guitar, Piano, Kèn, Sáo, Trống, Violin ... tới các Thiết Bị Âm Thanh phục vụ biểu diễn âm nhạc cùng hệ thống Showroom nhạc cụ rộng khắp tại Hà Nội, Hồ Chí Minh và Online Store tiện ích bậc nhất. BK Music vô cùng tự tin cung cấp tới khách hàng các sản phẩm vvà dịch vụ hoàn mỹ làm hài lòng không chỉ các khách hàng nghiệp dư mà cả giới nhạc công, nghệ sỹ chuyên nghiệp.
                Năm 2016 đánh dấu sự nghiệp gần 15 năm đam mê và gắn bó trong cộng đồng âm nhạc của BK Music. Ở thời khắc quan trọng này, BK Music và các cộng sự càng cảm thấy phải quyết tâm, cống hiến hết mình hơn nữa cho sự phát triển của cộng đồng âm nhạc nước nhà. Bởi vì chúng tôi tin rằng âm nhạc gắn liền với đời sống văn hóa xã hội, khi một thứ tốt lên thì mọi thứ khác cũng sẽ trở nên tốt đẹp hơn.
              </p>
            </div>
            <div class="col-12 col-md-6 col-lg-4 ctcol2">
              <h5 className="py-3">
                Nếu quý khách có thắc mắc gì xin vui lòng liên hệ với cửa hàng
              </h5>
              <Form className="info">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control type="email" placeholder="Họ và tên" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Địa chỉ Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control type="email" placeholder="Số điện thoại" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Tiêu đề</Form.Label>
                  <Form.Control type="email" placeholder="Tiêu đề" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Nội dung</Form.Label>
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <button type="submit" className="btn btn-warning my-2">Gửi</button>
              </Form>
            </div>
            <div class="col-12 col-md-6 col-lg-4 ctcol3">
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
      </div>
    );
  }
}
