import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Introduction from "./pages/introduction";
import Product from "./pages/product";
import Services from "./pages/services";
import Posts from "./pages/posts";
import Promotion from "./pages/promotion";
import Contact from "./pages/contact";
import Installment from "./pages/installment";
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
          <Route path="/introduction" exact component={Introduction} />
          <Route path="/product" exact component={Product} />
          <Route path="/services" exact component={Services} />
          <Route path="/posts" exact component={Posts} />
          <Route path="/promotion" exact component={Promotion} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/installment" exact component={Installment} />
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
