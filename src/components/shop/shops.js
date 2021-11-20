import React from 'react';
import { Link } from "react-router-dom";
import "./shop.css";

export default class Shop extends React.Component {
    render() {
        const { id, name, img } = this.props.shop;

        return (
            <div className="col-sm-2 col-md-3 col-lg-2">
                <Link to="/product_list" style={{ textDecoration: 'none' }}>
                    <div className="container shop-card-container">
                        <div className="row shop-img-container">
                            <div className="col-12 col-md-12 col-lg-12">
                                <img src={img} alt="shop-img" id={id} className="my-3" />
                            </div>
                        </div>
                        <hr />
                        <div className="row shop-name text-capitalize">
                            <h5 className="my-2">{name}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

}