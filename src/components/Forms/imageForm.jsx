import React from 'react';
import { Form, Col, Button, } from 'react-bootstrap';
import { Label, Input } from 'reactstrap';

import api from '../../server-api/api'

class ImageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDelete: false,
            showUpload: true,
        }
    }
    componentDidUpdate(oldProps) {
        const newProps = this.props
        if (oldProps.imageId !== newProps.imageId) {
            this.setState({ showDelete: true, showUpload: false })
        }
    }

    componentDidMount() {
        const image = this.props.imageUrl
        if (image) {
            var output = document.getElementById(`image-preview-File${this.props.index}`);
            if (typeof (image) == "string") {
                output.src = "https://shielded-savannah-89374.herokuapp.com/" + image
            }
            else {
                output.src = URL.createObjectURL(image);
            }
        }
    }

    handelDelete = async () => {
        const deleteImage = await api.deleteImagesById(this.props.imageId.id);
        if (deleteImage) {
            var output = document.getElementById(`image-preview-File${this.props.index}`);
            output.src = 'https://shielded-savannah-89374.herokuapp.com/images/general/loadingApartment.jpg'
        }
        this.setState({ showDelete: false, showUpload: true })
    }
    render() {
        return (
            <Form.Row>
                <Form.Group as={Col} style={{ height: "150px" }}>
                    <img className={'image-preview'} id={`image-preview-File${this.props.index}`} src="https://shielded-savannah-89374.herokuapp.com/images/general/loadingApartment.jpg" alt='' />
                    {this.state.showDelete ?
                        <Button id='delete-image' variant="danger" onClick={this.handelDelete}>delete image</Button> :
                        this.state.showUpload &&
                        <div>
                            <Label for="exampleFile">Upload your image</Label>
                            <Input type="file" name="file" id={`File${this.props.index}`} onChange={this.props.imageChange} />
                        </div>}

                </Form.Group>
            </Form.Row>
        )
    }
}

export default ImageForm;
