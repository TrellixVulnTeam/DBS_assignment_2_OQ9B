import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const SearchBarContainer = styled.div`
  background: #00c0b1;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  margin-bottom: 20px !important;
`;

export const Nav = styled.nav`
  max-width: 1400px;
  height: 80px;
  display: flex;
  padding: 5px 0 5px 0;
  z-index: 10;
`;

export const Logo = styled.div`
  padding: 0;
  width: 300px;
  @media screen and (max-width: 1200px) {
    width: 150px;
  }

  @media screen and (max-width: 480px) {
    width: 100px;
  }
`;

export const NavLogo = styled(Link)`
  padding: 0;
  border-style: solid;
  border-color: #fff;
  border-radius: 10px;
  width: 170px;
  margin: 0;
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 90px;
  }
  position: relative;
  left: -30px;
`;

export const LogoName = styled.p`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  margin: auto;
  margin-left: -10px;
  position: relative;
  right: -30px;
`;

export const ShopName = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin: auto;
  margin-left: 5px;
  margin-right: -10px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  //margin-left: -20px;
  align-items: center;
`;

export const NavLinkText = styled.p`
  font-size: 18px;
  color: #fff;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const NavIcon = styled.i`
  font-size: 24px;
  margin-right: 10px;
`;

export const NavCart = styled.i`
  font-size: 18px;
`;

export const SearchNav = styled.nav`
  height: 30px;
  display: flex;
  margin-top: 10px;
  z-index: 10;
  float: left;
  position: relative;
  width: 800px;
  height: 80px;

  @media screen and (max-width: 1200px) {
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 150px;
  }
`;

export const SearchInput = styled.input`
  color: #000;
  width: 100%;
  height: 100%;
  float: left;
  border: 0;
  background: #fff;
  font-size: 16px;
  border-radius: 10px;
  height: 40px;
  padding: 10px;
  position: relative;
  left: -80px;
  top: 10px
`;

export const SearchBtn = styled.button`
    height: 100%;
    width: 100%
    font-size: 12px;
    right: 0;
    position: absolute;
    right: 82px;
    top: 12px;
    width: 80px;
    height: 35px; 
    background: #00c0b1;
    color: #fff;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0;

    @media screen and (max-width: 1200px) {
        width: 50px;
    }
`;
