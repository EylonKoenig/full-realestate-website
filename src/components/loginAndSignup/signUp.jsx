import React from 'react';

class SignUp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name} = event.target;
        if(name === "firstName"){
            this.setState({
                firstName: event.target.value});
        }
        else if(name === "lastName"){
            this.setState({
                lastName: event.target.value});
        }
        else if(name === "email"){
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
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-5 mx-auto">
                        <div class="myform form ">
                            <div class="logo mb-3">
                                <div class="col-md-12 text-center">
                                    <h1 >Sign up</h1>
                                </div>
                            </div>
                            <form action="#" name="registration" onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">First Name</label>
                                    <input type="text"  name="firstName" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter first name" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Last Name</label>
                                    <input type="text"  name="lastName" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter last name" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Password</label>
                                    <input type="password" min={6} name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password" onChange={this.handleChange}/>
                                </div>
                                <div class="col-md-12 text-center mb-3">
                                    <button type="submit" class=" btn btn-block mybtn tx-tfm">Get Started For Free</button>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="form-group">
                                        <p class="text-center"><button className={"form_link"}  onClick={this.props.activateSingupAndLogin()}>Already have an account?</button></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;
