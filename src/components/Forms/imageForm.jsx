import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Label, Input } from 'reactstrap';

class ImageForm extends React.Component {
    componentDidMount(){
        if(this.props.imageUrl){
            var output = document.getElementById(`image-preview-File${this.props.index}`);
            output.src = URL.createObjectURL(this.props.imageUrl);
            }
    }
    render() {

        return (
            <Form.Row>
            <Form.Group as={Col} style={{ height: "150px" }}>
                <img className={'image-preview'} id={`image-preview-File${this.props.index}`} src="http://localhost:5000/images/general/loadingApartment.jpg" alt='' />
                <Label for="exampleFile">Upload your image</Label>
                <Input type="file" name="file" id={`File${this.props.index}`} onChange={this.props.imageChange} />
            </Form.Group>
        </Form.Row>
        )
    }
}

export default ImageForm;
