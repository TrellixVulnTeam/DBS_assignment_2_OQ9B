import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const AdContainer = styled.div`
  margin-top: 40px;
`;
export const AdContainerRow = styled.div`
  display: flex;
  height: 280px;
`;

export const AdImage = styled.img`
  height: 280px;
`;

export const ListWrapper = styled.div`
  margin: 40px 0 40px 0;
  padding: 20px 20px 10px 10px;
  background-color: #ededed;
  border-radius: 10px;
`;

export const ListTitleRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ListTitle = styled.p`
  font-weight: bold;
  font-size: 36px;
  padding: 0;
  flex-basis: 80%;
  margin: auto 0 auto 0;
`;

export const ListBtn = styled(Link)`
  font-size: 20px;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  height: 100%;
  margin: auto 0 auto 0;
`;
