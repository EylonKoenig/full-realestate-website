import React from 'react';
import { withRouter } from "react-router";
import cookie from 'react-cookies'


import validate, { field } from '../validator';
import InputErrors from '../inputErrors';
import api from '../../../server-api/api'


class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: field({ name: 'user', isRequired: true, }),
            password: field({ name: 'password', isRequired: true, minLength: 6 }),
        };

        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    inputChange({ target: { name, value } }) {
        const errors = validate(name, value, this.state[name].validations);
        this.setState({
            [name]: {
                ...this.state[name],
                value,
                errors
            }
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        let isOK = true;

        for (let prop in this.state) {
            const field = this.state[prop];
            const errors = validate(prop, field.value, field.validations);
            if (errors.length) {
                isOK = false;
                this.setState({ [prop]: { ...this.state[prop], errors } })
            }
        }
        if (isOK) {
            const result = {};

            for (let prop in this.state) {
                result[prop] = this.state[prop].value;
            }
            api.login(result)
                .then(response => {
                    if (response) {
                        console.log(response)
                        if (response.data.status === 'inactive') {
                            cookie.remove('auth', { path: '/' })
                            alert("your user is suspended");
                            this.props.history.push('/')
                        } else {
                            this.props.loginHandelClick();
                            this.props.history.push('/my_apartments')
                        }
                    }
                })
        }
    }
    render() {
        return (
            <div className={"row"} onClick={this.props.handleChildClick()}>
                <div className="col-md-5 mx-auto">
                    <div className="myform form ">
                        <div className="logo mb-3">
                            <div className="col-md-12 text-center">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <form action="" method="post" name="login" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email"
                                    name="user"
                                    className="form-control"
                                    id="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onBlur={this.inputChange} />
                                <InputErrors errors={this.state.user.errors}></InputErrors>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Password</label>
                                <input type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    autoComplete="on"
                                    placeholder="Enter Password"
                                    onBlur={this.inputChange} />
                                <InputErrors errors={this.state.password.errors}></InputErrors>
                            </div>
                            <div className="form-group">
                                <p className="text-center">By signing up you accept our <a className={"form_link"} href="/">Terms Of Use</a></p>
                            </div>
                            <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn tx-tfm">Login</button>
                            </div>
                            <div className="col-md-12 ">
                                <hr />
                            </div>
                            <div className="form-group">
                                <p className="text-center">Don't have account? <button className={"form_link"} id="signup" onClick={this.props.activateSignupAndLogin()}>Sign up here</button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(LogIn);
