import React from 'react';
import "./customer.css";

export default class CustomerInfo extends React.Component {

    render() {
        const { firstname, lastname, email, typename } = this.props.customer;
        return (
            <div className="container customer-info-container">
                <div className="row">
                    <div className="col-3 customer-info-img-container">
                        <img src="https://huyhoanhotel.com/wp-content/uploads/2016/05/765-default-avatar.png" alt="avatar" />
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-12 customer-info-name-container">
                                <h3 className="text-capitalize">Tên: {firstname} {lastname}</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 customer-info-email-container">
                                <h3>Email: {email}</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 customer-info-type-container">
                                <h3>Cấp độ: {typename}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}