import React from 'react';
import CustomerInfo from "../components/customerInfo/customerInfo";
import axios from "axios";
import CustomerOrder from '../components/customerInfo/customerOrder';
import CustomerSpent from '../components/customerInfo/custormerTotalSpent';
import { Link } from "react-router-dom";

const ClearToken = () => {
    localStorage.removeItem('token');
}

const userID = JSON.parse(localStorage.getItem('token'));

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cusInfor: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/customer_info', {
            params: {
                id: userID[0].id
            }
        }).then((response) => {
            console.log(JSON.parse(localStorage.getItem('token')));
            const userInfor = response.data;
            this.setState(() => ({
                cusInfor: userInfor
            }))
        }).catch((error) => { console.error(error) })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {this.state.cusInfor.map((cusInfor) => { return <CustomerInfo customer={cusInfor} /> })}
                        <CustomerSpent />
                        <Link to='/' className="btn btn-primary logout-btn" onClick={() => { ClearToken(); window.location.href = "/"; }}> Đăng xuất </Link>
                    </div>
                </div>
                <h2 className="order-heading" style={{ fontWeight: 700, color: 'blue' }}>Đơn hàng của bạn</h2>
                <CustomerOrder />
            </div>
        )
    }

}
