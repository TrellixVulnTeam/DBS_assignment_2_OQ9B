import React, { Component } from "react";
import parseNumber from "./parseNumber";
import { priceTag } from "./../../data/ProductData/priceTags"
import { productType } from "../../data/ProductData/productTypes";
import { shops } from "../../data/shopData/shopData"
const Context = React.createContext();

class Provider extends Component {
  state = {
    products: [],
    category: "",
    titleImg: "",
    modalOpen: false,
    filterBrandModal: false,
    filterPriceModal: false,
    productType: productType[0],
    shops: shops
  };

  setProducts = (data) => {
    let tempProducts = [];
    data.forEach(item => {
      const it = { ...item };
      tempProducts = [...tempProducts, it];
    });
    this.setState({
      products: tempProducts
    })
  }

  setProductType = (data) => {
    this.setState({
      productType: data
    })
  }

  openModal = (type) => {
    if (type === "sort") {
      this.setState(() => {
        return { modalOpen: true };
      })
    }
    else if (type === "brand") {
      this.setState(() => {
        return { filterBrandModal: true };
      })
    } else if (type === "price") {
      this.setState(() => {
        return { filterPriceModal: true };
      })
    }
  }

  closeModal = (type) => {
    if (type === "sort") {
      this.setState(() => {
        return { modalOpen: false };
      })
    }
    else if (type === "brand") {
      this.setState(() => {
        return { filterBrandModal: false };
      })
    } else if (type === "price") {
      this.setState(() => {
        return { filterPriceModal: false };
      })
    }
  }

  sortProducts = (type) => {
    let tempProducts = [];

    this.state.products.forEach(item => {
      const it = { ...item };
      tempProducts = [...tempProducts, it];
    });
    if (type === "a-z") {
      tempProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (type === "z-a") {
      tempProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (type === "ascen") {
      tempProducts.sort((a, b) => (parseNumber(a.price) - parseNumber(b.price)));
    } else if (type === "descen") {
      tempProducts.sort((a, b) => (parseNumber(b.price) - parseNumber(a.price)));
    }

    this.setState({
      products: tempProducts
    })
  }

  filterByBrand = async (brand, data) => {
    await this.setProducts(data);
    console.log(brand);
    const tempProducts = this.state.products.filter((item) => {
      return !item.brand.localeCompare(brand);
    });

    this.setState({
      products: tempProducts
    })
  }

  filterByPrice = async (priceIndex, data) => {
    await this.setProducts(data);

    const tempProducts = this.state.products.filter((item) => {
      console.log(item.price >= priceTag[priceIndex].value[0]);
      return (parseNumber(item.price) >= parseNumber(priceTag[priceIndex].value[0]) && parseNumber(item.price) < parseNumber(priceTag[priceIndex].value[1]));
    });

    this.setState({
      products: tempProducts
    })
  }

  setTitle = (title, img) => {
    this.setState({
      category: title,
      titleImg: img
    })
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          setProducts: this.setProducts,
          setTitle: this.setTitle,
          sortProducts: this.sortProducts,
          openModal: this.openModal,
          closeModal: this.closeModal,
          filterByBrand: this.filterByBrand,
          setProductType: this.setProductType,
          filterByPrice: this.filterByPrice,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
