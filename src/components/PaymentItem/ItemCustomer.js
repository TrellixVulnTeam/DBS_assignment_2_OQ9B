import React from 'react'
import { Form } from "react-bootstrap";
import Textfield from "@atlaskit/textfield";

function ItemCustomer() {
    return (
        <div class="card bg-light text-dark">
            <div class="bg-warning text-white p-2">
                <h3 class="text-center">Thông tin khách hàng</h3>
            </div>
            <Textfield placeholder='Họ Tên'></Textfield>
            <Textfield placeholder='Số điện thoại'></Textfield>
            <Textfield placeholder='Email'></Textfield>
            <Textfield placeholder='Tỉnh.Thành phố'></Textfield>
            <Textfield placeholder='Quận/Huyện'></Textfield>
            <Textfield placeholder='Phường/Xã'></Textfield>
            <Textfield placeholder='Số nhà, Tên đường'></Textfield>
            <Form.Control as="textarea" rows={6} placeholder="Ghi chú cho cửa hàng" />
        </div>
    )
}

export default ItemCustomer

