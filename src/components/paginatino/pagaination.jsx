import React from 'react';
import Pagination from 'react-bootstrap/Pagination'

class MyPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            page:props.currentPage,
            displayLimit:new Array( Math.ceil(props.allapartments/props.displaylimit)).fill("i"),
        };
    }

    render() {
        return (
            <Pagination style={{marginBottom:'5px'}}>
                <Pagination.First />
                <Pagination.Prev />
        {this.state.displayLimit.map((i,number) =>  <Pagination.Item key={number} id={number+1} name={"pagination"} active={number+1 === this.state.page}  onClick={this.props.handleInputChange}>{number+1}</Pagination.Item>)}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        );
    }
}

export default MyPagination;