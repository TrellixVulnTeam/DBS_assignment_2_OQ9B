import React from "react";
import Footer from "../components/footer";
import Icon from "../components/icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Thông tin cửa hàng</Footer.Title>
            <Footer.Link href="#">Địa chỉ cửa hàng</Footer.Link>
            <Footer.Link href="#">Liên hệ với chúng tôi</Footer.Link>
            <Footer.Link href="#">bkis.support@gmail.com</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Về chúng tôi</Footer.Title>
            <Footer.Link href="#">Giới thiệu</Footer.Link>
            <Footer.Link href="#">Hệ thống cửa hàng</Footer.Link>
            <Footer.Link href="#">Điều khoản sử dụng</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Chính sách cửa hàng</Footer.Title>
            <Footer.Link href="#">Chính sách bảo hành</Footer.Link>
            <Footer.Link href="#">Chính sách bảo mật</Footer.Link>
            <Footer.Link href="#">Chính sách đổi trả</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Kênh truyền thông</Footer.Title>
            <Footer.Link href="#">
              <Icon className="fab fa-facebook"></Icon>Facebook
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-youtube"></Icon>Youtube
            </Footer.Link>
            <Footer.Link href="#">
              <Icon className="fab fa-twitter"></Icon>Twitter
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
