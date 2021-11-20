import React from "react";
import {
  Logo,
  LogoName,
  ShopName,
  Nav,
  NavLogo,
  NavLink,
  NavIcon,
  NavMenu,
  NavLinkText,
  SearchNav,
  SearchBtn,
  SearchInput,
  SearchBarContainer,
} from "./SearchBarElements";

function click() {
  alert("Hello world!");
}

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Nav>
        <Logo>
          <NavLogo to="/home">
            <ShopName>
              Bach Khoa
              <br />
              E-Commerce
            </ShopName>
            <LogoName><i class="fas fa-shopping-bag"></i></LogoName>
          </NavLogo>
        </Logo>
        <SearchNav>
          <SearchInput
            type="text"
            placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn"
          ></SearchInput>
          <SearchBtn type="button" onclick={click}>
            <NavIcon className="fas fa-search"></NavIcon>
          </SearchBtn>
        </SearchNav>
        <NavMenu>
          <NavLink to="/cart">
            <NavIcon className="fas fa-shopping-cart"></NavIcon>
          </NavLink>
          <NavLink to="/login">
            <NavIcon className="fas fa-user"></NavIcon>
          </NavLink>
        </NavMenu>
      </Nav>
    </SearchBarContainer>
  );
};

export default SearchBar;
