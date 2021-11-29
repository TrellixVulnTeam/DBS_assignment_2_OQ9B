import React from "react";
import { useLocation } from 'react-router-dom';
export default function Title({ title, img }) {
    var currentRoutes = useLocation();
    if (currentRoutes.pathname === '/product_list') {
        return (
            <>
                <div className="row">
                    <div className="col-12 mx-auto my-2 text-title">
                        <h1 className="text-capitalize">
                            <strong>{title}</strong>
                        </h1>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <div className="row">
                <div className="col-12 mx-auto my-2 text-title">
                    <h1 className="text-capitalize">
                        <strong>{title}</strong>
                    </h1>
                </div>
            </div>
        )
    }
}