import React from 'react';
import cookie from 'react-cookies'
import { Form, Col, Button } from 'react-bootstrap';
import { Label, Input, FormText } from 'reactstrap';

import api from '../../../server-api/api';
import validate, { field } from '../validator';
import InputErrors from '../inputErrors';
import UploadImages from './uploadImages';
import '../../../css/apartmentForm/aprtment.css'
import setData from './setApartmentForm';

class ApartmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formDetails: {
                country: field({ name: 'country', isRequired: true, checklist: { list: [], status: true } }),
                city: field({ name: 'city', isRequired: true, checklist: { list: [], status: true } }),
                address: field({ name: 'address', isRequired: false }),
                price: field({ name: 'address', isRequired: false }),
                sqft: field({ name: 'sqft', isRequired: true }),
                number_of_bath: field({ name: 'number_of_bath', isRequired: (false) }),
                number_of_room: field({ name: 'number_of_room', isRequired: (false) }),
                for_sale: field({ name: 'for_sale', value: false, isRequired: (false), checkstatus: true }),
                for_rent: field({ name: 'for_rent', value: false, isRequired: (false) }),
                property_type: field({ name: 'property_type', isRequired: (true) }),
                main_image: field({ name: 'main_image', isRequired: (false) }),
            },
            files: [],
            imagesVisbilte: false,
            countries: [],
            cities: [],
        };
        this.inputChange = this.inputChange.bind(this);
        this.setStatus = this.setStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    async componentDidMount() {
        let data = await api.getAllCountries();
        const curFormDetails = this.state.formDetails;
        curFormDetails.country.validations.checklist.list = data.data.countries;
        this.setState({ countries: data.data.countries, formDetails: curFormDetails });
    }

    inputChange({ target: { name, value } }) {
        if (name === 'country' && value) {
            this.setCities(value);
        }
        if (name === 'for_sale' || name === 'for_rent') {
            this.setStatus(name);
            return;
        }
        const errors = validate(name, value, this.state.formDetails[name].validations);
        const obj = this.state.formDetails;
        obj[name] = { ...this.state.formDetails[name], value, errors }
        this.setState({ formDetails: obj });
    }
    imageChange = (event) => {
        const data = [...this.state.files, ...event.target.files]
        var output = document.getElementById(`image-preview-${event.target.id}`);
        output.src = URL.createObjectURL(event.target.files[0]);
        if (event.target.id === 'File1') {
            const obj = this.state.formDetails
            obj.main_image.value = event.target.files[0]
            this.setState({ formDetails: obj })
            return
        }
        this.setState({ files: data })
    }
    async setCities(conutry) {
        const obj = this.state.formDetails
        let data = await api.getAllCitiesByCountry(conutry);
        let dataList = data.data.map(city => city.name);
        obj.city.validations.checklist.list = dataList
        this.setState({ cities: data.data, formDetails: obj });
    }

    setStatus = (name) => {
        const {formDetails} = this.state;
        const value = !formDetails[name].value
        const obj = formDetails;
        obj[name] = { ...formDetails[name], value }
        this.setState({ formDetails: obj });
        const values = [formDetails.for_sale.value,formDetails.for_rent.value];
        const errors = validate(name, values,formDetails[name].validations);
        obj[name] = {...formDetails[name],errors}
        this.setState({ formDetails: obj});
    }

    onSubmit = e => {
        e.preventDefault();
        const {formDetails} = this.state;
        let isOK = true;
        let errors = undefined;
        for (let prop in formDetails) {
            const field = formDetails[prop];
            if(prop === 'for_sale') {
                const values = [formDetails.for_sale.value,formDetails.for_rent.value];
                errors = validate(prop, values, field.validations);
            } else {
                 errors = validate(prop, field.value, field.validations);
            }
            const obj = formDetails;
            if (errors.length) {
                isOK = false;
                obj[prop] = { ...formDetails[prop], errors }
            }
            this.setState({ formDetails: obj })
        }
        if (isOK) {
            const result = {};
            for (let prop in formDetails) {
                result[prop] = formDetails[prop].value;
            }
            const data = setData(result, cookie.load('auth').userId, this.state.files, this.state.cities);
            api.sendDataToServer(data);
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
                                                <option key={index} id={index} value={country}>{country}</option>
                                            );
                                        })}
                                    </datalist>
                                    <InputErrors errors={this.state.formDetails.country.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <input list={'city'} type={'text'} name={'city'} className="form-control" onChange={this.inputChange} />
                                    <datalist id={'city'}>
                                        {this.state.cities.map((city, index) => {
                                            return (
                                                // <option key={index} id={index} value={city.id}>{city.name}</option>
                                                <option key={index} id={index}>{city.name}</option>

                                            );
                                        })}
                                    </datalist>
                                    <InputErrors errors={this.state.formDetails.city.errors}></InputErrors>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control name='address' onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.address.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label >Price</Form.Label>
                                    <span className="input-group-addon">$</span>
                                    <Form.Control name='price' onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.price.errors}></InputErrors>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridRoom">
                                    <Form.Label>Number of rooms</Form.Label>
                                    <Form.Control name='number_of_room' onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.number_of_room.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridnumber_of_bath">
                                    <Form.Label>Number of bahts</Form.Label>
                                    <Form.Control name='number_of_bath' onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.number_of_bath.errors}></InputErrors>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridsqft">
                                    <Form.Label>sqft</Form.Label>
                                    <Form.Control name='sqft' onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.sqft.errors}></InputErrors>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridProperty_type-">
                                    <Form.Label>Property Type</Form.Label>
                                    <Form.Control name='property_type' as="select" onBlur={this.inputChange}>
                                        <option value="">Choose here</option>
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
                                        onClick={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.for_sale.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group className={"d-flex justify-content-center align-items-center"} as={Col} controlId="formGridRent">
                                    <Form.Check
                                        name='for_rent'
                                        type="switch"
                                        id="for_rent"
                                        label="For rent"
                                        onClick={this.inputChange} />
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