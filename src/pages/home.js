import React, { Component } from "react";
import { Consumer } from "../components/products/content";
import Shop from "../components/shop/shops";
import ProductListSlide from "../components/homeComponents/productListSlide/productListSlide";
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/shops`)
      .then((response) => {
        const shopsList = response.data;
        this.setState(() => ({
          shops: shopsList
        }))
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <>
        <Consumer>
          {value => <div>
            <div className="container">
              <div className="row mx-0">
                <h3 style={{ fontWeight: "bold" }}>Danh mục cửa hàng</h3>
                {this.state.shops.map(shop => {
                  return <Shop key={shop.shopOwnerID} shop={shop} />
                })}
              </div>
            </div>
            <div className="container">
              <ProductListSlide
                title="Sản phẩm nổi bật"
                dataList={value.products.slice(0, 6)}
              />
            </div>
          </div>
          }
        </Consumer>
      </>
    );
  }
}
