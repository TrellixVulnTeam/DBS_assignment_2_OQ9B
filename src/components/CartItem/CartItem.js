
import upIcon from './upArrow.svg';
import downIcon from './downArrow.svg';
import './CartPage.css';
import React from 'react';
import { useState } from 'react';

function CartItem({ item, update, Xoa }) {
  const [amount, SetAmount] = useState(1); //Chỉ dùng để re-render lại trang, không sử dụng giá trị đó
  function Number_Stepper() {
    function add() {
      SetAmount(amount + 1);
      item.props.amount++;
      update();
    }
    function minus() {
      if (item.props.amount <= 1) { }
      else {
        SetAmount(amount - 1);
        item.props.amount--;
        update();
      }
    }
    return (
      <div class="Num_Stepper">
        <div class="col-1">
          <div class="item">
            {item.props.amount}
          </div>
        </div>
        <div class="col-2">
          <input type="image" id="Plus" src={upIcon} onClick={add} />
          <input type="image" id="Minus" src={downIcon} onClick={minus} />
        </div>
      </div>
    )
  };
  return (
    <div class="row2">
      <div class="col1">
        <img src={item.props.img} style={{ height: "180px", width: "200px" }} />
      </div>
      <div class="col1">
        {item.props.name}
      </div>
      <div class="col1">
        {item.props.price}đ
      </div>
      <div class="col1">
        <Number_Stepper />
      </div>
      <div class="col1">
        {item.props.price * item.props.amount}đ
      </div>
      <div class="col2">
        <input id="delete_button" type="button" value="Xóa" onClick={() => Xoa(item.props.id)} />
      </div>
    </div>
  )
}

export default CartItem;