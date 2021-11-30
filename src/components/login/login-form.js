import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

function loginUser(user) {
    console.log(user);
    return axios.post('http://localhost:5000/login', user)
        .then(data => {
            if (data.data !== 'Incorrect Username and/or Password!' && data.data !== 'Your account has been locked') {
                console.log(data.data);
                return data.data;
            } else if (data.data === 'Your account has been locked') {
                alert("Tài khoản của quý khách đã bị khóa");
            }
            else if (data.data === 'Incorrect Username and/or Password!') {
                console.log("Login Failed");
                alert("Vui lòng nhập đúng tài khoản và mật khẩu");
            }
        }).catch(error => { console.log(error); });
}

export default function LoginForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        }
        const token = await loginUser(user);
        console.log(token);
        setToken(token);
    }

    return (
        <div className="container d-flex justify-content-center login-form-container">
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6">
                    <img src="https://www.codignus.com/images/blog/4/fa691d58250beb6a99e1829605bf4b9d.jpeg" alt="login-img" className="login-img" />
                </div>
                <div className="col-12 col-md-12 col-lg-6">
                    <div className="Login">
                        <h1 className="text-center" style={{ fontWeight: 700 }}>Đăng nhập</h1>
                        <Form onSubmit={handleSubmit} action="#">
                            <Form.Group size="lg" controlId="text" className="my-1">
                                <Form.Label style={{ fontWeight: 600 }}>Username</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Vui lòng nhập tài khoản"
                                    style={{ borderRadius: 20, }}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label style={{ fontWeight: 600 }}>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Vui lòng nhập mật khẩu"
                                    style={{ borderRadius: 20, }}
                                />
                            </Form.Group>
                            <Button block size="lg" type="submit" disabled={!validateForm()} id="btn">
                                Đăng nhập
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}