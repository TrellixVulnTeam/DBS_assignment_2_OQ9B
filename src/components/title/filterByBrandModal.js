import React from "react";
import { Consumer } from "../products/content";
import { useLocation } from 'react-router-dom';
export default function FilterByBrandModal() {
    var currentRoutes = useLocation();
    return (
        <Consumer>
            {(value) => {
                if (!value.filterBrandModal) {
                    return null;
                }
                else if (currentRoutes.pathname === '/product' || currentRoutes.pathname === '/product_list') {
                    return (
                        <div className="container filter-brand-modal">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                    {value.productType.brandNames.map((item) => {
                                        return (<button className="btn btn-outline-secondary" onClick={() => value.filterByBrand(item.name, value.productType.data)}>{item.name}</button>)
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