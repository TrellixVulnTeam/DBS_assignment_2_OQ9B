import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const SearchBarContainer = styled.div`
  background: #333333;
  display: flex;
  justify-content: center;
`;

export const Nav = styled.nav`
  max-width: 1400px;
  height: 60px;
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
  border-color: #ffdd00;
  border-radius: 10px;
  width: 190px;
  margin: 0;
  color: #ffdd00;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 90px;
  }
`;

export const LogoName = styled.p`
  color: #ffdd00;
  font-size: 28px;
  font-weight: bold;
  margin: auto;
  margin-left: -10px;
`;

export const ShopName = styled.p`
  color: #ffdd00;
  font-size: 12px;
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
  margin: auto;
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
  margin-right: 10px;
`;

export const SearchNav = styled.nav`
  height: 30px;
  display: flex;
  margin-top: 10px;
  z-index: 10;
  float: left;
  position: relative;
  width: 690px;
  height: 40px;

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
  height: 30px;
  padding: 10px;
`;

export const SearchBtn = styled.button`
    height: 100%;
    width: 100%
    font-size: 12px;
    right: 0;
    position: absolute;
    width: 110px;
    height: 30px;
    background: #ffdd00;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0;

    @media screen and (max-width: 1200px) {
        width: 50px;
    }
`;
