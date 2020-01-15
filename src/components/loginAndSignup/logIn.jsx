import React from 'react';


class LogIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name} = event.target;
        if(name === "email"){
            this.setState({
                email: event.target.value});
        }
        else if(name === "password"){
            this.setState({
                password: event.target.value});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        console.log((this.props));
        return (
            <div className={"row"} onClick={ this.props.handleChildClick()}>
                <div class="col-md-5 mx-auto">
                    <div class="myform form ">
                        <div class="logo mb-3">
                            <div class="col-md-12 text-center">
                                <h1>Login</h1>
                            </div>
                        </div>
                        <form action="" method="post" name="login" onSubmit={this.handleSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password" onChange={this.handleChange}/>
                            </div>
                            <div class="form-group">
                                <p class="text-center">By signing up you accept our <a className={"form_link"} href="#">Terms Of Use</a></p>
                            </div>
                            <div class="col-md-12 text-center ">
                                <button type="submit" class=" btn btn-block mybtn tx-tfm">Login</button>
                            </div>
                            <div class="col-md-12 ">
                                <hr/>
                            </div>
                            <div class="form-group">
                                <p class="text-center">Don't have account? <button className={"form_link"} id="signup" onClick={this.props.activateSignupAndLogin()}>Sign up here</button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

export default LogIn;
