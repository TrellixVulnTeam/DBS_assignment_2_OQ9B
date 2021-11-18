import {
  ProductMenuDropdownContainer,
  ProductMenuTitle,
  ProductMenuTitleWrapper,
  MenuIcon,
  DropdownList,
  DropdownMenuItem,
  DropdownMenuItemLogo,
  ItemLink,
} from "./ProductDropdownElements";
import { productType } from "../../../data/ProductData/productTypes"
import { Consumer } from "../../products/content";

const ProductDropdown = () => {
  return (
    <ProductMenuDropdownContainer>
      <ProductMenuTitleWrapper>
        <MenuIcon className="fas fa-bars"></MenuIcon>
        <ProductMenuTitle>DANH MỤC SẢN PHẨM</ProductMenuTitle>
        <MenuIcon className="fas fa-caret-down"></MenuIcon>
      </ProductMenuTitleWrapper>
      <DropdownList id="product-menu-dropdown">
        <Consumer>
          {value => {
            return productType.map(item => {
              return (
                <DropdownMenuItem>
                  <ItemLink to="/product_list" onClick={() => { value.setProducts(item.data); value.setTitle(item.title, item.titleImg); value.setProductType(item) }}>
                    <DropdownMenuItemLogo src={item.img}></DropdownMenuItemLogo>
                    {item.title}
                  </ItemLink>
                </DropdownMenuItem>
              )
            })
          }}
        </Consumer>
      </DropdownList>
    </ProductMenuDropdownContainer>
  );
};

export default ProductDropdown;
