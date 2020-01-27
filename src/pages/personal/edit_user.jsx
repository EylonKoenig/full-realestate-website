import React from 'react';
import cookie from 'react-cookies'

import setData from './convertData/convertEdirUser'
import api from '../../server-api/api'
import validate, { field } from '../../components/Forms/validator';
import InputErrors from '../../components/Forms/inputErrors';

class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                first_name: field({ name: 'first name', isRequired: true }),
                last_name: field({ name: 'last name', isRequired: false }),
                user: field({ name: 'user', isRequired: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, checklist: { list: [], status: false } }),
                phone: field({ name: 'phone', isRequired: true, minLength: 6 }),
                password: field({ name: 'password',value:"", isRequired: false, minLength: 6 }),
                old_password: field({ name: 'password',value:"", isRequired: false, minLength: 6 }),
            }
            
        };

    }
    componentDidMount() {
        const userId = cookie.load('auth').id
        if (userId) {
            this.getUserDetails(userId);
            this.getUsers();
        }

    }
    async getUserDetails(id) {
        const userData = await api.getUserDeatils(id)
        const userDetails = this.state.userDetails;
        for (let prop in userDetails) {
            if (prop === 'user' || prop === 'password') continue;
            userDetails[prop].value = userData.data[prop]
        }
        userDetails.user.value = userData.data.email
        userDetails.old_password.oldValue = userData.data.password
        this.setState({ userDetails })
    }
    async getUsers() {
        const data = await api.getUsers()
        const userData = this.state.userDetails.user;
        // remove urself email from list to prevet validation
        userData.validations.checklist.list = data.data.filter(userEmail => userEmail !== this.state.userDetails.user.value);
        this.setState({ users_list: userData });
    }

    inputChange = ({ target: { name, value } }) => {
        const errors = validate(name, value, this.state.userDetails[name].validations);
        const { userDetails } = { ...this.state };
        userDetails[name].value = value;
        userDetails[name].errors = errors;
        this.setState({ userDetails })
    }

  handleSubmit = async  e => {
        e.preventDefault();
        let isOK = true;
        let errors = {}
        const {userDetails} = this.state
        for (let prop in userDetails) {
            const field = userDetails[prop];
            if (prop === 'old_password') {
                const convertPassword =await api.getPassword(userDetails[prop].value)
                field.validations.checkPassword = userDetails[prop].oldValue;
                errors = validate(prop, convertPassword, field.validations);
                userDetails[prop].errors = errors
                this.setState({userDetails})               
            } else {
                errors = validate(prop, field.value, field.validations);
            }
            if (errors.length) {
                isOK = false;
                const { userDetails } = { ...this.state };
                userDetails[prop].errors = errors;
                this.setState({userDetails})
            }
        }
        if (isOK) {
            const userId = cookie.load('auth').id
            const data = setData(this.state.userDetails,userId);
            api.editUser(data).then(result => { if (result) {console.log("wewee")} })

        }
    }

    render() {
        const { userDetails } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto" style={{ height: '100vh' }}>
                        <div className="myform  " style={{ border: 'none', top: '15px' }}>
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Edit Profile</h1>
                                </div>
                            </div>
                            <form action="#" name="registration" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">User/Email address</label>
                                    <input type="email" name="user" className="form-control" id="email" aria-describedby="emailHelp" placeholder={userDetails.user.value} onBlur={this.inputChange} />
                                    <InputErrors errors={userDetails.user.errors}></InputErrors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">First Name</label>
                                    <input type="text" name="first_name" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder={userDetails.first_name.value} onBlur={this.inputChange} />
                                    <InputErrors errors={userDetails.first_name.errors}></InputErrors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Last Name</label>
                                    <input type="text" name="last_name" className="form-control" id="last_name" aria-describedby="emailHelp" placeholder={userDetails.last_name.value} onBlur={this.inputChange} />
                                    <InputErrors errors={userDetails.last_name.errors}></InputErrors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Phone</label>
                                    <input type="text" name="phone" className="form-control" id="phone" aria-describedby="emailHelp" placeholder={userDetails.phone.value} onBlur={this.inputChange} />
                                    <InputErrors errors={userDetails.phone.errors}></InputErrors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Password</label>
                                    <input type="password" name="old_password" id="oldPassword" className="form-control" aria-describedby="emailHelp" placeholder="Enter your old Password" onBlur={this.inputChange} />
                                    <InputErrors errors={userDetails.old_password.errors}></InputErrors>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Password</label>
                                    <input type="password" name="password" id="newPassword" className="form-control" aria-describedby="emailHelp" placeholder="Enter your new Password" onBlur={this.inputChange} />
                                    <InputErrors errors={userDetails.password.errors}></InputErrors>
                                </div>
                                <div className="col-md-12 text-center ">
                                    <button type="submit" className=" btn btn-block mybtn tx-tfm">Submit</button>
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
