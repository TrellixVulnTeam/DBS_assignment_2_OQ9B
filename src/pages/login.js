import React from "react"
import Title from "../components/title/title"
import LoginForm from "../components/login/login-form"
import "../components/login/login.css"
const Login = () => {
    return (
        <div className="login-all">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-12 NavBar" id="NB2">
                    </div>
                    <div className="row menu-row">
                        <div className="col-12 col-md-12 col-lg-12 login-container">
                            <LoginForm className="login-form" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;