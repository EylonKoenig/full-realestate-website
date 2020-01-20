import React from 'react';
import axios from "axios";
import cookie from 'react-cookies'
import { Form, Col, Button } from 'react-bootstrap';
import { Label, Input, FormText } from 'reactstrap';

import api from '../../server-api/api';
import validate, { field } from './validator';
import InputErrors from './inputErrors';
import '../../css/apartmentForm/aprtment.css'
import UploadImages from './apartment/uploadImages';

class ApartmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formDetails: {
                country: field({ name: 'country', isRequired: true,checklist:{list:[],status:false} }),
                city: field({ name: 'city', isRequired: true }),
                address: field({ name: 'address', isRequired: false }),
                sqft: field({ name: 'sqft', isRequired: true }),
                number_of_baths: field({ name: 'number_of_baths', isRequired: (false) }),
                number_of_rooms: field({ name: 'number_of_rooms', isRequired: (false) }),
                for_sale: field({ name: 'for_sale', isRequired: (false) }),
                for_rent: field({ name: 'for_rent', isRequired: (false) }),
                property_type: field({ name: 'property_type', isRequired: (false) }),
            },
            files: [],
            imagesVisbilte: false,
            countries: [],
            cities: [],
        };
        this.inputChange = this.inputChange.bind(this);
    }
    async componentDidMount() {
        let data = await api.getAllCountries();
        const curFormDetails = this.state.formDetails;
        curFormDetails.country.validations.checklist.list = data.data.countries;
        this.setState({ countries: data.data.countries,formDetails: curFormDetails});
    }

    inputChange({ target: { name, value } }) {
        if(name === 'country') {
            this.setCities(value);
        }
        const errors = validate(name, value, this.state.formDetails[name].validations);
        this.setState({
            [name]: {
                ...this.state.formDetails[name],
                value,
                errors
            }
        });
    }
    imageChange = (event) => {
        this.setState({ files: [...this.state.formDetails.files, ...event.target.files] })
        var output = document.getElementById(`image-preview-${event.target.id}`);
        output.src = URL.createObjectURL(event.target.files[0]);
    }
    async setCities(conutry){
        let data = await api.getAllCitiesByCountry(conutry);
        this.setState({ cities: data.data});
    }
    onSubmit = e => {
        e.preventDefault();
        let isOK = true;
        for (let prop in this.state.formDetails) {
            if (prop === 'file') continue;
            const field = this.state.formDetails[prop];
            const errors = validate(prop, field.value, field.validations);
            if (errors.length) {
                isOK = false;
                const obj = this.state.formDetails[prop] = { ...this.state.formDetails[prop], errors }
                this.setState({ formDetails: obj })
            }
        }
        if (isOK) {
            const result = {};

            for (let prop in this.state) {
                result[prop] = this.state[prop].value;

            }

            // need to send the parameters
        }
    }
    handelImagesClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ imagesVisbilte: !this.state.imagesVisbilte });
    }
    handleChildClick = (e) => {
        e.stopPropagation();
    };

    render() {
        console.log(this.state);
        return (
            <div id={'wraper'} style={{ margin: '50px auto', width: '500px' }}>
                {cookie.load('auth') ?
                    <div>
                        {this.state.imagesVisbilte && <UploadImages handleChildClick={() => this.handleChildClick}
                            handleChange={this.inputChange}
                            imageChange={this.imageChange}
                            handleShow={this.handelImagesClick} />}
                        <Form onSubmit={this.onSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCountry">
                                    <Form.Label>Country</Form.Label>
                                    <input list={'country'} type={'text'} name={'country'} className="form-control" onChange={this.inputChange} />
                                    <datalist id={'country'}>
                                        {this.state.countries.map((country, index) => {
                                            return (
                                                <option id={index} value={country}>{country}</option>
                                            );
                                        })}
                                    </datalist>
                                    <InputErrors errors={this.state.formDetails.country.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    {/* <Form.Control name='city'onBlur={this.inputChange} /> */}
                                    <input list={'city'} type={'text'} name={'city'} className="form-control" onChange={this.inputChange} />
                                    <datalist id={'city'}>
                                    {this.state.cities.map((city, index) => {
                                            return (
                                                <option id={index} data-value={city.id}>{city.name}</option>
                                            );
                                        })}
                                    </datalist>
                                    <InputErrors errors={this.state.formDetails.city.errors}></InputErrors>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control name='address' onBlur={this.inputChange} />
                                <InputErrors errors={this.state.formDetails.address.errors}></InputErrors>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridRoom">
                                    <Form.Label>Number of rooms</Form.Label>
                                    <Form.Control name='number_of_rooms' onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.number_of_rooms.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridnumber_of_baths">
                                    <Form.Label>Number of bahts</Form.Label>
                                    <Form.Control name='number_of_baths' onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.number_of_baths.errors}></InputErrors>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridsqft">
                                    <Form.Label>sqft</Form.Label>
                                    <Form.Control name='sqft' />
                                    <InputErrors errors={this.state.formDetails.sqft.errors}></InputErrors>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridProperty_type-">
                                    <Form.Label>Property Type</Form.Label>
                                    <Form.Control name='property_type' as="select" onBlur={this.inputChange}>
                                        <option value='house'>House</option>
                                        <option value='ranch'>Ranch</option>
                                        <option value='land'>Land</option>
                                        <option value='multi_family'>multi family</option>
                                        <option value='coop'>Co-Op</option>
                                    </Form.Control>
                                    <InputErrors errors={this.state.formDetails.property_type.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group className={"d-flex justify-content-center align-items-center"} as={Col} controlId="formGridSale">
                                    <Form.Check name='for_sale'
                                        type="switch"
                                        id="for_sale"
                                        label="For Sale"
                                        onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.for_sale.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group className={"d-flex justify-content-center align-items-center"} as={Col} controlId="formGridRent">
                                    <Form.Check
                                        name='for_rent'
                                        type="switch"
                                        id="for_rent"
                                        label="For rent"
                                        onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.for_rent.errors}></InputErrors>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} style={{ height: "150px" }}>
                                    <img className={'image-preview'} multiple id={'image-preview-File1'} alt='' />
                                    <Label for="exampleFile">Upload your image</Label>
                                    <Input type="file" name="file" id="File1" onChange={this.imageChange} />
                                    <FormText color="muted">
                                        this will be your main image
                                    </FormText>
                                    <button style={{ paddingTop: '5px', margin: '30px 0' }} onClick={this.handelImagesClick}>upload more images</button>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    : <div>not authorize</div>}
            </div>
        )
    }
}

export default ApartmentForm;