import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { FormGroup, Label, Input, FormText } from 'reactstrap';


class ApartmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div id={'wraper'} style={{ margin: '50px auto', width: '500px' }}>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control placeholder="Enter Country" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control placeholder="Enter City" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>


                    <Form.Row>

                        {/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group> */}

                        {/* <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group> */}

                        <Form.Group as={Col} controlId="formGridRoom">
                            <Form.Label>Number of rooms</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBath">
                            <Form.Label>Number of bahts</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBath">
                            <Form.Label>sqft</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridProperty_type-">
                            <Form.Label>Property Type</Form.Label>
                            <Form.Control as="select">
                                <option>House</option>
                                <option>reanch</option>
                                <option>land</option>
                                <option>multi family</option>
                                <option>co-op</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className={"d-flex justify-content-center align-items-center"} as={Col} controlId="formGridBath">
                            <Form.Check
                                type="switch"
                                id="for_sale"
                                label="For Sale"
                            />
                        </Form.Group>
                        <Form.Group className={"d-flex justify-content-center align-items-center"} as={Col} controlId="formGridBath">
                            <Form.Check
                                type="switch"
                                id="for_rent"
                                label="For rent"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <FormGroup>
                            <Label for="exampleFile">Upload your image</Label>
                            <Input type="file" name="file" id="exampleFile" />
                            <FormText color="muted">
                                this will be your main image
                            </FormText>
                        </FormGroup>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ApartmentForm;