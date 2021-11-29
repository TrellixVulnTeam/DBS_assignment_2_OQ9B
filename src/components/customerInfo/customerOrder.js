import React from 'react';
import OrderItem from './orderItem';
import "./customer.css"
import axios from "axios";

const userID = JSON.parse(localStorage.getItem('token'));

export default class CustomerOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerOrders: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/customer_info/orders', {
            params: {
                id: userID[0].id
            }
        }).then((response) => {
            const userOrders = response.data;
            console.log(userOrders);
            this.setState(() => ({
                customerOrders: userOrders
            }))
        }).catch((error) => { console.error(error) })
    }

    render() {
        return (
            <div className="container customer-order-container">
                <div className="row">
                    <div className="col-12">
                        {this.state.customerOrders.map((cusOrder) => {
                            return <OrderItem orderItem={cusOrder} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}