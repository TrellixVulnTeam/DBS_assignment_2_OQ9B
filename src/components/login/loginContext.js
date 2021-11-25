import React, { Component } from "react";
import axios from 'axios';
const Context = React.createContext();

class LoginProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoggedOut: false,
            username: "",
            password: "",
            token: null
        }
    }

    setUsername = (username) => {
        this.setState({
            username: username
        })
    }

    setPassword = (password) => {
        this.setState({
            password: password
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        const token = await this.loginUser(user);
        console.log(token);
        this.setToken(token);
    }

    validateForm = () => {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    loginUser = (user) => {
        console.log(user);
        return axios.post('http://localhost:5000/login', user)
            .then(data => {
                if (data.data !== 'Incorrect Username and/or Password!') {
                    console.log(data);
                    return data.data;
                } else {
                    console.log("Login Failed");
                    alert("Vui lòng nhập đúng tài khoản và mật khẩu");
                }
            }).catch(error => { console.log(error); });
    }

    setToken = (token) => {
        this.setState({
            token: token
        })
    }

    render() {
        return (
            <Context.Provider
                value={{
                    ...this.state,
                    handleSubmit: this.handleSubmit,
                    validateForm: this.validateForm,
                    setUsername: this.setUsername,
                    setPassword: this.setPassword
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

const LoginConsumer = Context.Consumer;

export { LoginProvider, LoginConsumer };
