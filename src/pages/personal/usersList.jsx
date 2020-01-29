import React from 'react';
import cookie from 'react-cookies'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import api from '../../server-api/api'

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            loading: true,
            user: cookie.load('auth'),
        }
    };
    changeStatus(e) {
        // console.log(e)
    }
    async componentDidMount() {
        const data = await api.getAllUsers();
        this.setState({ allUsers: data.data, loading: false })
    }
    handelClick(row){
            const {allUsers} = this.state
            allUsers[0].id = 111
           this.setState({allUsers})
    }
    render() {
        var options = {
                    onRowClick:(row)=> {
                        this.handelClick(row)
                    }
        }
        return (
            <div style={{ height: '100vh' }}>
                {!this.state.loading &&
                    <div style={{ marginTop: '46px' }}>
                        <BootstrapTable data={this.state.allUsers} options={options}>
                            <TableHeaderColumn dataField='id' isKey width=''>ID</TableHeaderColumn>
                            <TableHeaderColumn dataField='role_id' width=''>role id</TableHeaderColumn>
                            <TableHeaderColumn dataField='first_name' width=''>First Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='last_name' width=''>Last Name</TableHeaderColumn>
                            <TableHeaderColumn dataField='email' width=''>Email</TableHeaderColumn>
                            <TableHeaderColumn dataField='password' width=''>Pasasword</TableHeaderColumn>
                            <TableHeaderColumn dataField='phone'>Phone</TableHeaderColumn>
                            <TableHeaderColumn dataField='status' changeStatus={this.changeStatus} dataFormat={activeFormatter}>Status</TableHeaderColumn>
                        </BootstrapTable>
                    </div>
                }
            </div>

        )
    }
}



class ActiveFormatter extends React.Component {
    render() {
        return (
            <input type='checkbox' style={{ opacity: 1 }} checked={this.props.active === 'active' && 'checked'} />
        );
    }
}

function activeFormatter(cell, row) {
    return (
        <ActiveFormatter active={cell} />
    );
}


export default UsersList;