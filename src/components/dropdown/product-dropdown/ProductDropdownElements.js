import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const ProductMenuDropdownContainer = styled.div`
  padding: 0;
  margin: 0;
  &:hover {
    display: block;
    #product-menu-dropdown {
      display: block;
      width: 100%;
    }
  }
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const ProductMenuTitleWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-left: 5px;
`;

export const ProductMenuTitle = styled.p`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  margin: auto 5px auto 10px;
`;

export const MenuIcon = styled.i`
  font-size: 28px;
`;

export const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  list-style: none;
  margin-top: 12px;
  margin-left: -5px;
  padding: 0;
  display: none;
`;

export const DropdownMenuItem = styled.li`
  padding: 5px 0 5px 5px;
  width: 100%;
  background-color: #ededed;
  display: flex;
  line-height: 1.5em;
  border-bottom: 1px dashed #000;
  &:hover {
    border-left: 3px solid #000;
  }
`;

export const DropdownMenuItemLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const ItemLink = styled(Link)`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  display: flex;
  text-decoration: none;
  height: 100%;
  width: 100%;
  &:hover {
    color: #000;
    transform: translateX(3px);
  }
`;
