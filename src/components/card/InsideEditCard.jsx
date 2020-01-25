import React from 'react';

import api from '../../server-api/api'
import DeleteApartmentModal from './deleteModal';
import history from '../history';

class InsideEditImage extends React.Component {
    delete_apartment(event){
        event.stopPropagation();
        event.preventDefault();
        
    }
     handleEdit = async () =>{
         const apartmentId = this.props.apartment.id
         const data = await api.getApartmentById(apartmentId);
        history.push({
            pathname:`/edit_apartments`,
            apartment:data.data[0]
        });
    }
    render() {
        return (
            <div id={'contentImgEdit'} className={'inimagecontent'} onClick={this.delete_apartment}>
                <button className="editButton" onClick={this.handleEdit}>edit property</button> 
                <DeleteApartmentModal id={this.props.apartment.id} setData={this.props.setData}/>
            </div>
        )
    }
}

export default InsideEditImage;
