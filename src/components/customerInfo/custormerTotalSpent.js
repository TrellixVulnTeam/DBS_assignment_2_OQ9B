import React from "react";
import axios from "axios";
import priceWithDots from "../products/priceWithDots"
const userID = JSON.parse(localStorage.getItem('token'));

export default class CustomerSpent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerSpent: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/customer_info/total_spent', {
            params: {
                id: userID[0].id
            }
        }).then((response) => {
            console.log(response.data);
            this.setState(() => ({
                customerSpent: response.data
            }))
        }).catch((error) => { console.error(error) })
    }

    render() {
        return (
            <h3 style={{ fontWeight: 700, position: 'relative', left: 540, top: 28, color: 'red' }}>Tổng tiêu tích lũy: {this.state.customerSpent.map(item => priceWithDots(item.total))} VND</h3>
        )
    }
}