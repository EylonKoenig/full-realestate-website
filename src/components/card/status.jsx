import React from 'react';

import api from '../../server-api/api'

class StatusButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   //enum('pending','approved','denied','removed')
            statusOption: [["approved", 'approvedButton'], ["pending", 'editDiv'], ["denied", 'deleteDiv'], ["removed", 'deleteDiv']],
            status:props.apartments,
            statusClass:""
        }
    }

     handleChange = async (e) => {
        const apartment = this.props.apartment;
        const data = {status:e.target.value,apartmentId:apartment.id};
        let classSet = "";

        for(let i = 0 ;i<this.state.statusOption.length;i++){
            if(this.state.statusOption[i][0] === e.target.value)
            classSet = this.state.statusOption[i][1]
        }
        const setData = await api.editStatusApartment(data)
        if(setData){
            this.setState({status:setData.data})
            this.setState({statusClass:classSet})
        }

    }
    componentWillReceiveProps(nextProps) {
            const classColor = this.state.statusOption.find(status => status[0] === nextProps.apartment.status)
            this.setState({ status: nextProps.apartment.status });
            this.setState({statusClass:classColor[1]})
    }
    render() {
        console.log(this.state)
        const apartment = this.props.apartment;
        return (
            <div style={{ position: "absolute", bottom: '5px', width: '100%' }}>
                {/* <DropdownButton id="dropdown-basic-button"
                                title={this.state.status}
                                as={ButtonGroup}
                                 onChange={this.handleChange}
                                 className={this.state.statusOption.find(status=> {if(status[0] === apartment.status) return status[1]})}> */}

                <div className="dropdown d-flex">
                    <button className={this.state.statusClass+' dropdown-toggle'}
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
