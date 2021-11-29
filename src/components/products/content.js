import React, { Component } from "react";
import axios from 'axios';
const Context = React.createContext();

class Provider extends Component {
  state = {
    products: [],
    shopTitle: JSON.parse(localStorage.getItem('shopTitle')) || "",
    modalOpen: false,
    filterBrandModal: false,
    filterPriceModal: false,
    productsByShop: JSON.parse(localStorage.getItem('productsByShop')) || [],
    shopID: JSON.parse(localStorage.getItem('shopID')) || null,
    shops: [],
    productsFeatured: [],
    productsFilterByPrice: [],
    filterPrice: false,
  };

  componentDidMount() {
    axios.get(`http://localhost:5000/products`)
      .then((response) => {
        const productsList = response.data;
        this.setState(() => ({
          products: productsList
        }))
      })
      .catch(e => {
        console.log(e);
      });
  }

  setFilterByPrice = () => {
    this.setState({
      filterPrice: true
    })
  }

  unSetFilterByPrice = () => {
    this.setState({
      filterPrice: false
    })
  }

  setProducts = (shopId) => {
    let tempProducts = this.state.products;
    let tempProductsByShop = tempProducts.filter(product => product.ownerID === shopId);
    this.setState(
      { productsByShop: tempProductsByShop },
      () => { localStorage.setItem('productsByShop', JSON.stringify(this.state.productsByShop)) }
    )
  }

  setProductsFilterByPrice = (data) => {
    this.setState({
      productsFilterByPrice: data
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
    let tempProductsByShop = this.state.productsByShop;

    if (type === "a-z") {
      tempProductsByShop.sort((a, b) => a.name.localeCompare(b.name));
    } else if (type === "z-a") {
      tempProductsByShop.sort((a, b) => b.name.localeCompare(a.name));
    } else if (type === "ascen") {
      tempProductsByShop.sort((a, b) => (a.price - b.price));
    } else if (type === "descen") {
      tempProductsByShop.sort((a, b) => (b.price - a.price));
    }

    this.setState({
      productsByShop: tempProductsByShop
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

  setTitle = (title) => {
    this.setState({
      shopTitle: title
    }, () => { localStorage.setItem('shopTitle', JSON.stringify(this.state.shopTitle)) })
  }

  setShopId = (shopId) => {
    this.setState({
      shopID: shopId
    }, () => { localStorage.setItem('shopID', JSON.stringify(this.state.shopID)) })
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
          setFilterByPrice: this.setFilterByPrice,
          unSetFilterByPrice: this.unSetFilterByPrice,
          setProductsFilterByPrice: this.setProductsFilterByPrice,
          setShopId: this.setShopId,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export { Provider, Consumer };
