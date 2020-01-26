import React from 'react';
import cookie from 'react-cookies'

import api from '../../server-api/api'
import validate, { field } from '../../components/Forms/validator';
import InputErrors from '../../components/Forms/inputErrors';

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: field({ name: 'first name', isRequired: true }),
            last_name: field({ name: 'last name', isRequired: false }),
            user: field({ name: 'user', isRequired: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, checklist: { list: [], status: false } }),
            password: field({ name: 'password', isRequired: true, minLength: 6 }),
            phone: field({ name: 'phone', isRequired: true, minLength: 6 }),
        };

    }
    componentDidMount() {
        const userId = cookie.load('auth').id
        if(userId){
            this.getUserDetails(userId);
            this.getUsers();
        }

    }
    async getUserDetails(id){
        const userDetails = await api.getUserDeatils(id)
            this.setState({userDetails:userDetails.data})
    }
    async getUsers() {
        const data = await api.getUsers()
        const userData = this.state.user;
        userData.validations.checklist.list = data.data;
        this.setState({ user: userData });
    }

    inputChange =({ target: { name, value } })=> {
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
            // const data = setFormData(this.state);
            // api.addUser(data).then(result => { if (result) { console.log(this.state); this.props.signUpHandelClick() } })

        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto" style={{height:'100vh'}}>
                        <div className="myform  " style={{border:'none',top:'15px'}}>
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Edit Profile</h1>
                                </div>
                            </div>
                            <form action="#" name="registration" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">User/Email address</label>
                                    <input type="email" name="user" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.user.errors}></InputErrors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.password.errors}></InputErrors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">First Name</label>
                                    <input type="text" name="first_name" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter first name" onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.first_name.errors}></InputErrors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Last Name</label>
                                    <input type="text" name="last_name" className="form-control" id="last_name" aria-describedby="emailHelp" placeholder="Enter last name" onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.last_name.errors}></InputErrors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone</label>
                                    <input type="text" name="phone" className="form-control" id="phone" aria-describedby="emailHelp" placeholder="Enter phone number" onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.phone.errors}></InputErrors>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditUser;
