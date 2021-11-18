import React from 'react';
//import styled from 'styled-components';

function ButtonClick() {
  const shoot = () => {
    alert("Thông tin Đơn hàng đã được gửi đến cửa hàng");
  }

  return (
    <div style={{"padding": "10px"}}>
    <div class="d-grid">
        <button type="button" class="btn btn-success btn-lg" onClick={shoot}>Đặt hàng</button>
    </div>
    </div>
  );
}

export default ButtonClick