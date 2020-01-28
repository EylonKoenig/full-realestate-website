import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

class MyPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayLimit:new Array( Math.ceil(props.allapartments/props.displaylimit)).fill("i"),
            active:1,

        };
    }

    render() {
        console.log(this.props)
        return (
            <Pagination style={{marginBottom:'5px'}}>
                <Pagination.First />
                <Pagination.Prev />
        {this.state.displayLimit.map((i,number) =>  <Pagination.Item key={number+1} active={number+1 === this.state.active}>{number+1}</Pagination.Item>)}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        );
    }
}

export default MyPagination;