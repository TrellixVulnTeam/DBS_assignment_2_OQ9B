import React from 'react';
import { Link } from "react-router-dom";
import { Consumer } from '../products/content';
import "./shop.css";

export default class Shop extends React.Component {
    render() {
        const { shopOwnerID, shopName, shopImg } = this.props.shop;

        return (
            <Consumer>
                {value => <div className="col-sm-2 col-md-3 col-lg-2" onClick={() => { value.setTitle(shopName); value.setProducts(shopOwnerID); }}>
                    <Link to="/product_list" style={{ textDecoration: 'none' }}>
                        <div className="container shop-card-container">
                            <div className="row shop-img-container">
                                <div className="col-12 col-md-12 col-lg-12">
                                    <img src={shopImg} alt="shop-img" id={shopOwnerID} className="my-3" />
                                </div>
                            </div>
                            <hr />
                            <div className="row shop-name text-capitalize">
                                <h5 className="my-2">{shopName}</h5>
                            </div>
                        </div>
                    </Link>
                </div>}
            </Consumer>
        )
    }

}