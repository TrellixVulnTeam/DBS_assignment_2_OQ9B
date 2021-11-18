import React from 'react'
import ButtonClick from "../PaymentItem/ButtonClick";

function ItemOrder() {
    return (
        <div class="card bg-light text-dark">
            <div class="bg-warning text-white p-2">
                <h3 class="text-center">Đơn hàng</h3>
            </div>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Sản phẩm</th>
                    <th>Thành tiền</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Yamaha Grand Piano Gb 1K x 1</td>
                    <td>15.000.000đ</td>
                </tr>
                <tr>
                    <td>Tạm tính</td>
                    <td>15.000.000đ</td>
                </tr>
                <tr>
                    <td>Mã giảm giá</td>
                    <td>200.000đ</td>
                </tr>
                <tr>
                    <td>Tổng</td>
                    <td>14.800.000đ</td>
                </tr>
                </tbody>
            </table>

            <div style={{"padding": "1.5px"}}>
                <h3>Chọn phương thức thanh toán</h3>
                <form>
                <select class="form-select form-select-lg">
                    <option >Thanh toán trực tiếp</option>
                    <option >Thanh toán online</option>
                </select>
                </form>    
            </div>

            <ButtonClick/>
        </div>
    )
}

export default ItemOrder
