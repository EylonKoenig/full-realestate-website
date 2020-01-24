import React from 'react';
import DeleteApartmentModal from './deleteModal';

class InsideEditImage extends React.Component {
    delete_apartment(event){
        event.stopPropagation();
        event.preventDefault();

    }
    render() {
        return (
            <div id={'contentImgEdit'} className={'inimagecontent'} onClick={this.delete_apartment}>
                <button className="editButton">edit property</button> 
                <DeleteApartmentModal id={this.props.apartment.id} setData={this.props.setData}/>
            </div>
        )
    }
}

export default InsideEditImage;
