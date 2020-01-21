import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Label, Input } from 'reactstrap';


class UploadImages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    handleSubmit = e => {
        e.preventDefault();

    }


    render() {
        return (
            <div className={'container-fluid images-cover'}>
                <div className={"row "} onClick={this.props.handleChildClick()}>
                    <div className="col-md-5 mx-auto">
                        <div id={'image-form'} className="myform form ">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>upload images</h1>
                                </div>
                            </div>
                            <Form.Row>
                                <Form.Group as={Col} style={{ height: "150px" }}>
                                    <img className={'image-preview'} id={'image-preview-File2'} alt='' />
                                    <Label for="exampleFile">Upload your image</Label>
                                    <Input type="file"  name="file" id="File2" onChange={this.props.imageChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} style={{ height: "150px" }}>
                                    <img className={'image-preview'} id={'image-preview-File3'} alt='' />
                                    <Label for="exampleFile">Upload your image</Label>
                                    <Input type="file"  name="file" id="File3" onChange={this.props.imageChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} style={{ height: "150px" }}>
                                    <img className={'image-preview'} id={'image-preview-File4'} alt='' />
                                    <Label for="exampleFile">Upload your image</Label>
                                    <Input type="file" name="file" id="File4"  onChange={this.props.imageChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} style={{ height: "150px" }}>
                                    <img className={'image-preview'} id={'image-preview-File5'} alt='' />
                                    <Label for="exampleFile">Upload your image</Label>
                                    <Input type="file"  name="file" id="File5" onChange={this.props.imageChange} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} style={{ height: "150px" }}>
                                    <img className={'image-preview'} id={'image-preview-File6'} alt='' />
                                    <Label for="exampleFile">Upload your image</Label>
                                    <Input type="file" multiple  name="file" id="File6"onChange={this.props.imageChange} />
                                </Form.Group>
                            </Form.Row>
                            <div className="col-md-12 text-center ">
                                <button type="submit"  className=" btn btn-block mybtn tx-tfm" onClick={this.props.handleShow}>DONE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default UploadImages;
