import React, {useEffect} from "react";
import ButtonClick from "../PaymentItem/ButtonClick";
import Title from "../title/title";
import { useState } from 'react';
import { Link } from "react-router-dom";
import Textfield from "@atlaskit/textfield";
import ItemCustomer from "./ItemCustomer";
import './PaymentPage.css'


function ItemOrder(props) {

    const [ItemList,setItemList] = useState([]);
    const [Sum,SetSum] = useState(TinhTong());    

    useEffect(() => {
    const StoredItemList = localStorage.getItem('cart');
    if(StoredItemList) {
      setItemList(JSON.parse(StoredItemList));
    }
    }, [] );
    useEffect(() => {
      localStorage.setItem('cart',JSON.stringify(ItemList));
      update();
    }, [ItemList] );
    function update() {
    SetSum(TinhTong());
    localStorage.setItem('cart',JSON.stringify(ItemList));
  }
  function TinhTong() { //Tổng price trong giỏ hàng
    var sum = 0;
    for(let i = 0; i < ItemList.length; i++)
    {
      sum += ItemList[i].props.price*ItemList[i].props.amount;
    }
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  const renderListProduct = ItemList.map((props, idx) => {//render list product
    return (
      <div>
        <table class="table table-bordered" style={{minWidth: '1200px', border: 'solid'}}>
                  <thead>
                  <tr>
                      <th style={{width:'100px'}} colSpan='2'>Sản phẩm</th>
                      <th style={{width:'150px'}}>Số lượng</th>
                      <th style={{width:'350px'}}>Thành tiền</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr key={idx}>
                    <td><img src={ItemList[idx].props.img}  
                        style={{ height: "25px", width: "30px" }} /></td>
                    <td style={{width: "800px" }}>{ItemList[idx].props.name}</td>
                    <td style={{marginTop:'500px'}}>{ItemList[idx].props.amount}</td>
                    <td style={{color:'red', fontWeight:'bold'}}>{(ItemList[idx].props.price * ItemList[idx].props.amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</td>
                  </tr>
                  <tr>
                    <td colSpan='2'>
                      <Textfield id="full-width-text-field" placeholder="Lời nhắn cho người bán">
                      </Textfield></td>
                    <td colSpan='2'> Đơn vị vận chuyển : Grap <Link style={{marginLeft:'160px'}}>Thay đổi</Link></td>
                  </tr>
                  </tbody>
        </table>
      </div>
    );
  });

    return (
        <div style={{ "min-height": "70vh" }}>
            <div class="container cartpage">
              <Title title="Thanh toán" />
            </div>
            <div>
              {renderListProduct}
            </div>

            <div style={{display: 'block', width:'500px', marginLeft:'700px'}}>
                <h3>Chọn phương thức thanh toán</h3>
                <form>
                <select class="form-select form-select-lg">
                    <option >Thanh toán khi nhận hàng</option>
                    <option >Thanh toán online</option>
                </select>
                </form>
              <ItemCustomer/>
            <ButtonClick/>  
            </div>
        </div>
    )
}

export default ItemOrder
