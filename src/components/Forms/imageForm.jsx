import React from 'react';
import { Form, Col,Button, } from 'react-bootstrap';
import { Label, Input } from 'reactstrap';

import api from '../../server-api/api'

class ImageForm extends React.Component {
    componentDidMount(){
        const image = this.props.imageUrl 
        if(image){
            var output = document.getElementById(`image-preview-File${this.props.index}`);
            if(typeof(image) == "string"){
                output.src = "http://localhost:5000/"+image
            }
            else {
                output.src = URL.createObjectURL(image);
        }
            }
    }

     handelDelete = async () =>{
        const deleteImage = await api.deleteImagesById(this.props.imageId.id) ;
        if(deleteImage){
            var output = document.getElementById(`image-preview-File${this.props.index}`);
            output.src = 'http://localhost:5000/images/general/loadingApartment.jpg'
        }
    }
    render() {
        console.log(this.props.imageId)
        return (
            <Form.Row>
            <Form.Group as={Col} style={{ height: "150px" }}>
                <img className={'image-preview'} id={`image-preview-File${this.props.index}`} src="http://localhost:5000/images/general/loadingApartment.jpg" alt='' />
                <Label for="exampleFile">Upload your image</Label>
                <Input type="file" name="file" id={`File${this.props.index}`} onChange={this.props.imageChange} />
                {this.props.imageId &&  
                <Button id='delete-image' variant="danger" onClick={this.handelDelete}>delete image</Button>}
            </Form.Group>
        </Form.Row>
        )
    }
}

export default ImageForm;
