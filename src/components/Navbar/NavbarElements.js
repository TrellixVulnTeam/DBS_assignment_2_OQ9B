import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: center;
  background: #ffdd00;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const Nav = styled.nav`
  height: 50px;
  display: flex;
  max-width: 1600px;
  padding-top: 0;
  padding-bottom: 0;
  z-index: 10;
  margin-left: -60px;
`;

export const ProductList = styled.nav`
  background: #c4c4c4;
  width: 270px;
  height: 100%;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    color: #000;
  }

  &.active {
    font-size: 20px;
    color: #fff;
    background: #000;
    transform: translateY(0px);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavIcon = styled.i`
  font-size: 28px;
`;

export const NavMenu = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: left;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
