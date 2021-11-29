import React from "react";
import { Consumer } from "../products/content";
import { useLocation } from 'react-router-dom';
import { priceTag } from '../../data/ProductData/priceTags'
export default function FilterByPriceModal() {
    var currentRoutes = useLocation();
    return (
        <Consumer>
            {(value) => {
                if (!value.filterPriceModal) {
                    return null;
                }
                else if (currentRoutes.pathname === '/product' || currentRoutes.pathname === '/product_list') {
                    return (
                        <div className="container filter-price-modal">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    {priceTag.map((item) => {
                                        return (<button className="btn btn-outline-secondary" onClick={() => value.filterByPrice(item.index, value.productType.data)}>{item.name}</button>)
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                }
            }}
        </Consumer>
    )
}