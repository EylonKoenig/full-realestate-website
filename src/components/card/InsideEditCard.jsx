import React from 'react';
import cookie from 'react-cookies'

import api from '../../server-api/api'
import DeleteApartmentModal from './deleteModal';
import history from '../history';
import StatusButton from './status';

class InsideEditImage extends React.Component {
    constructor(props) {
        super(props);
            this.state={
                apartment:{}
            }
    }

    async componentDidMount(){
        const apartment = await this.getApartment();
        this.setState({apartment})
    }

    delete_apartment(event) {
        event.stopPropagation();
        event.preventDefault();
    }
    handleEdit = async () => {
        history.push({
            pathname: `/edit_apartments`,
            apartment: this.state.apartment
        });
    }
    async getApartment(){
        const apartmentId = this.props.apartment.id
        const data = await api.getApartmentById(apartmentId);
        return data.data[0]

    }
    render() {
        return (
            <div>
                <div id={'contentImgEdit'} className={'inimagecontent'} onClick={this.delete_apartment} style={{height:'100%'}}>
                    <button className="editButton" onClick={this.handleEdit}>edit property</button>
                    <DeleteApartmentModal id={this.props.apartment.id} setData={this.props.setData} />
                    {cookie.load('auth') && cookie.load('auth').role_id === 1 &&
                    <StatusButton apartment={this.props.apartment}/>
                    }                    
                </div>
            </div>
        )
    }
}

export default InsideEditImage;
