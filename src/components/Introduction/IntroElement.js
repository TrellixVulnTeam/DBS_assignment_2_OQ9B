import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  height: 100%;
`;

export const PerContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`

export const Info = styled.div`
  display: inline-block;
  width: 40%;
  margin: 80px;

  h1 {
    font-size: 2rem;
  }

  p {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 40px;
    margin-top: 10px;
  }
`;
export const Map = styled.iframe`
  display: inline-block;
  width: 45%;
  margin-top: 120px;
  height: 500px;
`;
