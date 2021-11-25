import React from 'react';
import { Link } from "react-router-dom";


const ClearToken = () => {
    localStorage.removeItem('token');
}

const UserInfo = () => {
    return (
        <div>
            <h1>Logged in</h1>
            <Link to='/' className="btn btn-primary" onClick={() => { ClearToken(); window.location.href = "/"; }}> Đăng xuất </Link>
        </div>
    )
}

export default UserInfo;