import React, { useState } from 'react';
import "./customer.css";
import priceWithDots from '../products/priceWithDots';
import axios from 'axios';
import { Link } from 'react-router-dom';

const cancelOrder = (transID, orderID) => {
    console.log(transID, orderID);
    axios.get('http://localhost:5000/customer_info/cancel_orders', {
        params: {
            transId: transID,
            orderId: orderID
        }
    }).then((response) => {
        console.log(response);
    }).catch((error) => { console.error(error) })
}

const userID = JSON.parse(localStorage.getItem('token'));

function CustomerBtn(props) {
    const [reviewed, setReviewed] = useState(false);

    const getFeedback = (productID) => {
        axios.get('http://localhost:5000/products/details/feedback', {
            params: {
                productID: productID,
                customerID: userID[0].id
            }
        }).then((response) => {
            if (response.data.length > 0) {
                setReviewed(true);
            }
        }).catch(e => {
            console.log(e);
        });
    }

    getFeedback(props.id);

    const deleteFeedback = (productID) => {
        axios.delete('http://localhost:5000/products/details/feedback', {
            params: {
                productID: productID,
                customerID: userID[0].id
            }
        }).then((response) => {
            console.log(response);
        }).catch(e => {
            console.log(e);
        });
    }
    if (props.status === 'SUCCESS') {
        if (!reviewed) {
            return (
                <Link to={"/products/one-product/id_product/" + props.id} className="link">
                    <button className="btn btn-primary my-4">
                        Đánh giá
                    </button>
                </Link>
            )
        } else {
            return (
                <button className="btn btn-primary my-4" onClick={() => { deleteFeedback(props.id); window.location.reload() }}>
                    Xóa đánh giá
                </button>
            )
        }
    } else if (props.status === 'PENDING') {
        return (<button className="btn btn-primary my-4" onClick={() => { cancelOrder(props.transID, props.orderID); window.location.reload() }}>Hủy đơn</button>)
    } else {
        return null;
    }
}

export default class OrderItem extends React.Component {

    render() {
        const { name, imageURL, totalPrice, status, transID, orderID, id } = this.props.orderItem;
        return (
            <div className="container order-item-container">
                <div className="row">
                    <div className="col-3">
                        <img src={imageURL} alt="ordered-item" />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-12">
                                <h5>Tên: {name}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5 style={{ color: 'red' }}>Giá: {priceWithDots(totalPrice)} VND</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h5>Tình trạng: {status}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 order-item-btns-container">
                        <CustomerBtn status={status} transID={transID} orderID={orderID} id={id} />
                    </div>
                </div>
            </div>
        )
    }
}