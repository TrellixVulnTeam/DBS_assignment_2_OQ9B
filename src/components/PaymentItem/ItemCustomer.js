import React from 'react'
import { Form } from "react-bootstrap";
import Textfield from "@atlaskit/textfield";
import { useState } from 'react';

function ItemCustomer() {
    const [CustomerInfo,SetCustomerInfo] = useState({HoTen:'',SDT:'',Email:'',Tinh:'',Quan:'',Phuong:'', Duong:'', GhiChu:''})
    const ChangeHoTen = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,HoTen: e.target.value}));
        SetCustomerInfo({...CustomerInfo,HoTen: e.target.value});
    }
    const ChangeSDT = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,SDT: e.target.value}));
        SetCustomerInfo({...CustomerInfo,SDT: e.target.value});
    }
    const ChangeEmail = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Email: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Email: e.target.value});
    }
    const ChangeTinh = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Tinh: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Tinh: e.target.value});
    }
    const ChangeQuan = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Quan: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Quan: e.target.value});
    }
    const ChangePhuong = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Phuong: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Phuong: e.target.value});
    }
    const ChangeDuong = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,Duong: e.target.value}));
        SetCustomerInfo({...CustomerInfo,Duong: e.target.value});
    }
    const ChangeGhiChu = (e) => {
        localStorage.setItem('CustomerInfo',JSON.stringify({...CustomerInfo,GhiChu: e.target.value}));
        SetCustomerInfo({...CustomerInfo,GhiChu: e.target.value});
    }
    return (
        <div class="card bg-light text-dark">
            <div class="bg-warning text-white p-2">
                <h3 class="text-center">Thông tin khách hàng</h3>
            </div>

            <tbody>
                <Textfield placeholder='Họ Tên' value={CustomerInfo.HoTen} onChange={ChangeHoTen}></Textfield>
                <Textfield placeholder='Số điện thoại' value={CustomerInfo.SDT} onChange={ChangeSDT}></Textfield>
                <Textfield placeholder='Email' value={CustomerInfo.Email} onChange={ChangeEmail}></Textfield>
                <Textfield placeholder='Tỉnh.Thành phố' value={CustomerInfo.Tinh} onChange={ChangeTinh}></Textfield>
                <Textfield placeholder='Quận/Huyện' value={CustomerInfo.Quan} onChange={ChangeQuan}></Textfield>
                <Textfield placeholder='Phường/Xã' value={CustomerInfo.Phuong} onChange={ChangePhuong}></Textfield>
                <Textfield placeholder='Số nhà, Tên đường' value={CustomerInfo.Duong} onChange={ChangeDuong}></Textfield>
                <Form.Control as="textarea" rows={6} placeholder="Ghi chú cho cửa hàng" value={CustomerInfo.GhiChu} onChange={ChangeGhiChu}/>
            </tbody>
        </div>
    )
}

export default ItemCustomer

