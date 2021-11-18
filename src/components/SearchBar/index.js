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
            <LogoName>BKIS</LogoName>
            <ShopName>
              Bach Khoa
              <br />
              InstrumentShop
            </ShopName>
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
          <NavLink to="/">
            <NavIcon className="fas fa-map-marker-alt"></NavIcon>
            <NavLinkText>Showroom</NavLinkText>
          </NavLink>
          <NavLink to="/contact">
            <NavIcon className="fas fa-phone-alt"></NavIcon>
            <NavLinkText>0123.456.789</NavLinkText>
          </NavLink>
          <NavLink to="/cart">
            <NavIcon className="fas fa-shopping-cart"></NavIcon>
          </NavLink>
        </NavMenu>
      </Nav>
    </SearchBarContainer>
  );
};

export default SearchBar;
