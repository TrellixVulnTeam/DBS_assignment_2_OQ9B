import React from "react";
import styled from "styled-components";
import { Consumer } from "../products/content";
import { useLocation } from 'react-router-dom';

const Filterbar = styled.div`
    .container {
        position: relative;
        background-color: #333333;
        height: 40px;
    }
    .container .sort-btn {
        border: none;
        background-color: #333333 !important;
    }
    .container .sort-btn:hover {
        color: #ffdd00;
    }
`
export default function FilterBar() {
    var currentRoutes = useLocation();
    return (
        <Filterbar>
            <Consumer>
                {value => (
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 col-md-9 col-lg-10">
                                <div className="row">
                                    <div className="col-sm-3 col-md-3 col-lg-2">
                                        <p className="search-text">Tìm theo</p>
                                    </div>
                                    <div className="col-sm-3 col-md-3 col-lg-1">
                                        <button className="btn btn-secondary sort-btn"
                                            onClick={() => {
                                                if (value.filterPriceModal || (currentRoutes.pathname !== '/product' && currentRoutes.pathname !== '/product_list')) {
                                                    value.closeModal("price");
                                                } else {
                                                    value.openModal("price")
                                                }
                                            }}>
                                            Giá <i className="fas fa-angle-down" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 col-md-3 col-lg-2">
                                <button className="btn btn-secondary sort-btn"
                                    onClick={() => {
                                        if (value.modalOpen || (currentRoutes.pathname !== '/product' && currentRoutes.pathname !== '/product_list')) {
                                            value.closeModal("sort");
                                        } else {
                                            value.openModal("sort")
                                        }
                                    }}>
                                    Sắp xếp theo <i className="fas fa-angle-down" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </Consumer>
        </Filterbar>
    )
}