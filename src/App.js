import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Payment from "./pages/payment";
import Cart from "./pages/cart";
import Login from "./pages/login";
import { FooterContainer } from "./container/footer";
import SearchBar from "./components/SearchBar";
import ProductList from "./pages/product_list";
import { Provider } from "./components/products/content";
import ProductInfo from "./pages/one_product";
import SortModal from "./components/title/sortModal";
import FilterByBrandModal from "./components/title/filterByBrandModal";
import FilterByPriceModal from "./components/title/filterByPriceModal";
function App() {
  return (
    <div>
      <Provider>
        <SearchBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/product_list" exact component={ProductList} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/products/one-product/id_product/:id" exact component={ProductInfo} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/login" exact component={Login} />
        </Switch>
        <SortModal />
        <FilterByBrandModal />
        <FilterByPriceModal />
      </Provider>
    </div >
  );
}

export default App;
