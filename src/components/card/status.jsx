import React from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

class StatusButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   //enum('pending','approved','denied','removed')
            statusOption: [["approved", 'approvedButton'], ["pending", 'editDiv'], ["denied", 'deleteDiv'], ["removed", 'deleteDiv']],
            status:props.apartments
        }
    }
    // componentDidMount() {
    //     console.log(this.props)
    //     this.setState({ statuss: this.props.apartment.status })
    // }
    handleChange(e) {
        console.log(e.target);
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        // You don't have to do this check first, but it can help prevent an unneeded render
        // if (nextProps.startTime !== this.state.status) {
            this.setState({ status: nextProps.apartment.status });
        // }
    }
    render() {
        console.log(this.props)
        const apartment = this.props.apartment;
        const classColor = this.state.statusOption.find(status => status[0] === apartment.status)
        return (
            <div style={{ position: "absolute", bottom: '5px', width: '100%' }}>
                {/* <DropdownButton id="dropdown-basic-button"
                                title={this.state.status}
                                as={ButtonGroup}
                                 onChange={this.handleChange}
                                 className={this.state.statusOption.find(status=> {if(status[0] === apartment.status) return status[1]})}> */}

                <div className="dropdown d-flex">
                    <button className={classColor && classColor[1]+' dropdown-toggle'}
                        type="button"
                        id="status" data-toggle="dropdown">{this.state.status}</button>
                    <div className="dropdown-menu status" role="menu" aria-labelledby="menu1">
                        {this.state.statusOption.map((item, index) => {
                            return (
                                <div key={index} className='statusButton'>
                                    {/* <label htmlFor={item[0]} >{item[0]}</label> */}
                                    <input name="status" className={item[1]} type="button" value={item[0]}
                                        onClick={(e)=>this.handleChange(e)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div >
        )
    }
}

export default StatusButton;
