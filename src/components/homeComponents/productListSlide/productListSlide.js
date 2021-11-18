import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ListWrapper,
  ListTitle,
  AdContainer,
  AdContainerRow,
  ListBtn,
  ListTitleRow,
  AdImage,
} from "../homePageElements";
import Product from "../../products/product";

function Lst(props) {
  let list_products = [];
  if (typeof props.dataList === "object") {
    list_products = props.dataList;
  }
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let item = list_products.map((product) => {
    return (
      <div>
        <Product key={product.id} product={product} />
      </div>
    );
  });
  return <Carousel responsive={responsive}>{item}</Carousel>;
}

function ProductListSlide(props) {
  return (
    <ListWrapper>
      <ListTitleRow>
        <ListTitle>{props.title}</ListTitle>
        <ListBtn to="/">Xem thêm</ListBtn>
      </ListTitleRow>
      <div className="row">
        <Lst dataList={props.dataList} />
      </div>
    </ListWrapper>
  );
}

export default ProductListSlide;
