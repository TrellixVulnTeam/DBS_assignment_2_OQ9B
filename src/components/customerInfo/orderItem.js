import React, { useState } from 'react';
import "./customer.css";
import priceWithDots from '../products/priceWithDots';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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


function AlertDialog({ props }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" className="cancel-order-btn" onClick={handleClickOpen}>
                Hủy đơn
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Quý khách có chắc chắn muốn hủy đơn không ?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Hủy đơn quá 5 lần có thể khiến tài khoản của quý khách bị khóa
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { cancelOrder(props.transID, props.orderID); window.location.reload(); handleClose() }}>Có</Button>
                    <Button onClick={handleClose} autoFocus>
                        Không
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
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
        return (<AlertDialog props={props} />)
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