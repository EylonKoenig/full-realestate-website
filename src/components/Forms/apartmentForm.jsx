import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import {  Label, Input, FormText } from 'reactstrap';

import validate, {field} from './validator';
import InputErrors from './inputErrors';

class ApartmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country:field({name:'country',isRequired:true}),
            city:field({name:'city',isRequired:true}),
            address:field({name:'address',isRequired:false}),
            sqft:field({name:'sqft',isRequired:true}),
            number_of_baths:field({name:'number_of_baths',isRequired:(false)}),
            number_of_rooms:field({name:'number_of_rooms',isRequired:(false)}),
            for_sale:field({name:'for_sale',isRequired:(false)}),
            for_rent:field({name:'for_rent',isRequired:(false)}),
            property_type:field({name:'property_type',isRequired:(false)}),
            file:field({name:'file',isRequired:(false)}),
        };
        this.inputChange = this.inputChange.bind(this);
    }
    inputChange({target:{name,value}}){
        const errors = validate(name,value,this.state[name].validations);
        this.setState({
            [name]:{
                ...this.state[name],
                value,
                errors
            }
        });
    }
    onSubmit = e => {
        e.preventDefault();
        
        let isOK =  true;

        for(let prop in this.state){
            const field = this.state[prop];
            const errors = validate(prop,field.value,field.validations);
            if(errors.length){
                isOK = false;
                this.setState({[prop]:{...this.state[prop],errors}})
            }
        }
        if(isOK){
            const result = {};

            for(let prop in this.state){
                result[prop] = this.state[prop].value;

            }

            // need to send the parameters
            console.log(result);
        }
    }

    render() {
        return (
            <div id={'wraper'} style={{ margin: '50px auto', width: '500px' }}>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control name='country' placeholder="Enter Country" onBlur={this.inputChange}/>
                            <InputErrors errors={this.state.country.errors}></InputErrors>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name='city' placeholder="Enter City" onBlur={this.inputChange}/>
                            <InputErrors errors={this.state.city.errors}></InputErrors>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name='address' placeholder="1234 Main St" onBlur={this.inputChange}/>
                            <InputErrors errors={this.state.address.errors}></InputErrors>
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridRoom">
                            <Form.Label>Number of rooms</Form.Label>
                            <Form.Control name='number_of_rooms' onBlur={this.inputChange}/>
                            <InputErrors errors={this.state.number_of_rooms.errors}></InputErrors>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBath">
                            <Form.Label>Number of bahts</Form.Label>
                            <Form.Control name='number_of_baths' onBlur={this.inputChange}/>
                            <InputErrors errors={this.state.number_of_baths.errors}></InputErrors>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBath">
                            <Form.Label>sqft</Form.Label>
                            <Form.Control name='sqft' />
                            <InputErrors errors={this.state.sqft.errors}></InputErrors>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridProperty_type-">
                            <Form.Label>Property Type</Form.Label>
                            <Form.Control name='property_type' as="select"onBlur={this.inputChange}>
                                <option>House</option>
                                <option>reanch</option>
                                <option>land</option>
                                <option>multi family</option>
                                <option>co-op</option>
                            </Form.Control>
                            <InputErrors errors={this.state.property_type.errors}></InputErrors>
                        </Form.Group>
                        <Form.Group className={"d-flex justify-content-center align-items-center"} as={Col} controlId="formGridSale">
                            <Form.Check name='for_sale'
                                type="switch"
                                id="for_sale"
                                label="For Sale"
                            onBlur={this.inputChange}/>
                            <InputErrors errors={this.state.for_sale.errors}></InputErrors>
                        </Form.Group>
                        <Form.Group className={"d-flex justify-content-center align-items-center"} as={Col} controlId="formGridRent">
                            <Form.Check
                                name='for_rent'
                                type="switch"
                                id="for_rent"
                                label="For rent"
                           onBlur={this.inputChange} />
                            <InputErrors errors={this.state.for_rent.errors}></InputErrors>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Label for="exampleFile">Upload your image</Label>
                            <Input type="file" name="file" id="File" onBlur={this.inputChange}/>
                            <FormText color="muted">
                                this will be your main image
                            </FormText>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Label for="exampleFile">Upload your image</Label>
                            <Input type="file" name="file" id="File" onBlur={this.inputChange}/>
                            <FormText color="muted">
                                this will be your main image
                            </FormText>
                        </Form.Group>
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