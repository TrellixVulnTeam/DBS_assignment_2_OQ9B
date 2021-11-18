import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../../container/ProductWrapper";
import { StarRating } from "../starRating/StarRating";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddToCart } from "../../pages/cart";
import parseNumber from "./parseNumber.js"
export default class Product extends Component {
  render() {
    const { id, title, img, price } = this.props.product;
    return (
      <ProductWrapper className="col-12 col-md-6 col-lg-3 my-3 col-grid">
        <div className="card prodCard">
          <div className="img-container p-5">
            <Link to={"/products/one-product/id_product/" + id}>
              <img src={img} alt="products" className="card-img-top" id={id} />
            </Link>
            <button className="cart-btn btn btn-sm" onClick={() => AddToCart({id: id, img: img, name: title, price: parseNumber(price)})}>
              <i class="fa fa-cart-plus"></i>
            </button>
          </div>
          <div className="card-footer d-flex justify-content-center">
            <ul className="list-group list-group-flush text-center">
              <StarRating value={3} />
              <Link to={"/products/one-product/id_product/" + id} className="link">
                <li className="list-group-item">
                  <p className="align-self-center mb-0">{title}</p>
                </li>
              </Link>
              <li className="list-group-item">
                <h5 className="font-italic mb-0">{price} VND</h5>
              </li>
            </ul>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
