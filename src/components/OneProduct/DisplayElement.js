import styled from 'styled-components';


export const Container = styled.div`
    width:100%;
    height:auto;
    margin-top: 80px;
    display:flex;
    justify-content: center;
`

export const ProImg = styled.img`
    height:650px;
    width: 700px;
    margin-left: -250px;
    margin-right: 40px;

`

export const BtnContainer = styled.div`
    width: 400px;
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 80px;
`

export const NormalBtn = styled.button`
    width: 180px;
    height: 60px;
    margin-right: 40px;
    border-radius: 10px;
    color: #333333;
    background-color: #ffdd00;
    border: none;
    outline: none;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease 0s;

    &:hover {
        background-color: #ffc107;
        transform: translateY(-5px);
      }

`

export const ColorBtn = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin: 5px;
    cursor: pointer;
`

export const InfoSection = styled.div`
    display: inline-block;
    padding-top: 10px;

    height:600px;
    margin:10px;

    .pro_name{
        font-size: 40px;
        font-weight: bold;
    }

    .pro_price{
        margin: 10px auto;
        font-size: 30px;
    }

    .color-section {
        font-size: 25px;
        margin-top: 60px ;
    }

    .quantity-section {
        font-size: 25px;
        margin-top: 30px ;
    }

    .container-normal_btn {
        margin-top: 40px;
    }


`