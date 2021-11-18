import React from "react";
import ItemOrder from "../components/PaymentItem/ItemOrder.js";
import ItemCustomer from "../components/PaymentItem/ItemCustomer.js";

const Payment = () => {
  return (
    <div style={{ "min-height": "90vh" }}>
      <div className="container mt-3">
        <div class="row">
          <div class="col-sm-5">
            <div style={{"padding": "50px"}}>
                <ItemCustomer/>
            </div>
          </div>
          <div class="col-sm-7">
            <div style={{"padding": "100px"}}>
                <ItemOrder/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
