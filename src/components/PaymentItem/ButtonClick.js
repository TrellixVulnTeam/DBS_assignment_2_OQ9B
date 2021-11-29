import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
//import styled from 'styled-components';
function shoot() {
  var temp = JSON.parse(localStorage.getItem('CustomerInfo'));
  axios.post('http://localhost:5000/payment/orders',
  temp
  ).then()
  .catch( e => {
  console.log(e);
  });
  var temp = localStorage.getItem('cart');
  var temp2 = JSON.parse(temp);
  axios.post('http://localhost:5000/payment/order_item',
    temp2
  ).then(() => {localStorage.setItem('cart',JSON.stringify([]));})
    .catch( e => {
    console.log(e);
  });

  alert("Thông tin Đơn hàng đã được gửi đến cửa hàng");
}

function ButtonClick() {
  return (
    <div style={{"padding": "10px"}}>
    <div class="d-grid">
        <button type="button" class="btn btn-success btn-lg" onClick={shoot}>Đặt hàng</button>
    </div>
    </div>
  );
}

export default ButtonClick