import React from "react";
import { Consumer } from "../products/content";
import { priceTag } from './priceTags';
import axios from "axios";

const shopID = localStorage.getItem('shopID');

export default class FilterByPriceModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsFilterByPrice: [],
        }
    }

    filterByPrice = (lowerPrice, upperPrice, shopID) => {
        console.log(shopID)
        axios.get('http://localhost:5000/products/filter', {
            params: {
                lowerPrice: lowerPrice,
                upperPrice: upperPrice,
                shopID: shopID
            }
        }).then((response) => {
            this.setState({
                productsFilterByPrice: response.data
            })
            console.log(response.data);
        }).catch((error) => { console.error(error) })
    }

    render() {
        return (
            <Consumer>
                {(value) => {
                    if (!value.filterPriceModal) {
                        return null;
                    }
                    else {
                        return (
                            <div className="container filter-price-modal">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        {priceTag.map((item) => {
                                            return (<button className="btn btn-outline-secondary" onClick={() => {
                                                this.filterByPrice(item.value[0], item.value[1], shopID);
                                                value.setProductsFilterByPrice(this.state.productsFilterByPrice);
                                                value.setFilterByPrice();
                                            }}>{item.name}</button>)
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

}