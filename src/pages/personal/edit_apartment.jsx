import React from 'react';
import cookie from 'react-cookies'
import { Form, Col, Button } from 'react-bootstrap';
import { Label, Input, FormText } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import api from '../../server-api/api'
import validate, { field } from '../../components/Forms/validator';
import InputErrors from '../../components/Forms/inputErrors';
import UploadImages from '../../components/Forms/apartment/uploadImages';
import '../../css/apartmentForm/aprtment.css'
import setData from '../../components/Forms/apartment/setApartmentForm';

class editApartment extends React.Component {
    constructor(props) {
        super(props);
        try {
            const apartment = props.location.apartment
            this.state = {
                formDetails: {
                    country: field({ name: 'country', value: apartment.country, isRequired: true, checklist: { list: [], status: true } }),
                    city: field({ name: 'city', value: apartment.city_name, isRequired: true, checklist: { list: [], status: true } }),
                    address: field({ name: 'address', isRequired: false }),
                    price: field({ name: 'price', isRequired: false }),
                    sqft: field({ name: 'sqft', value: apartment.sqft, isRequired: true }),
                    number_of_bath: field({ name: 'number_of_bath', isRequired: false }),
                    number_of_room: field({ name: 'number_of_room', isRequired: false }),
                    for_sale: field({ name: 'for_sale', value: false, isRequired: false, checkstatus: true }),
                    for_rent: field({ name: 'for_rent', value: false, isRequired: false }),
                    property_type: field({ name: 'property_type', value: apartment.property_type, isRequired: true }),
                    main_image: field({ name: 'main_image', isRequired: false }),
                },
                files: [],
                imagesVisbilte: false,
                countries: [],
                cities: [],
                hasError: false
            };
            this.setCities(apartment.country)
            this.inputChange = this.inputChange.bind(this);
            this.setStatus = this.setStatus.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
        } catch{
            this.props.history.push("/my_apartments")
        }
    }

    async componentDidMount() {
        try {
            let images = undefined;
            const apartment = this.props.location.apartment;
            const curFormDetails = this.state.formDetails;
            let data = await api.getAllCountries();
            images = apartment.images;
            this.setSaleStatus();
            if (images) {
                this.setState({ files: images.toString().split(',') })
            }
            curFormDetails.country.validations.checklist.list = data.data.countries;
            this.setState({ countries: data.data.countries, formDetails: curFormDetails });
        } catch {
            this.props.history.push("/my_apartments")
        }
    }

    setSaleStatus = () => {
        const apartment = this.props.location.apartment
        const formDetails = this.state.formDetails;
        if (apartment.sale_status === 'both') {
            formDetails.for_rent.value = true;
            formDetails.for_sale.value = true;
        } else if (apartment.sale_status === 'sale') {
            formDetails.for_sale.value = true;
        } else {
            formDetails.for_rent.value = true;
        }
        this.setState({ formDetails })
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
        obj[name] = { ...this.state.formDetails[name], value, errors };
        this.setState({ formDetails: obj });
    }
    imageChange = (event) => {
        const data = [...this.state.files, ...event.target.files];
        var output = document.getElementById(`image-preview-${event.target.id}`);
        output.src = URL.createObjectURL(event.target.files[0]);
        if (event.target.id === 'File1') {
            const obj = this.state.formDetails;
            obj.main_image.value = event.target.files[0];
            this.setState({ formDetails: obj });
            return
        }
        this.setState({ files: data })
    };
    async setCities(conutry) {
        const obj = this.state.formDetails;
        let data = await api.getAllCitiesByCountry(conutry);
        let dataList = data.data.map(city => city.name);
        obj.city.validations.checklist.list = dataList;
        this.setState({ cities: data.data, formDetails: obj });
    }

    setStatus = (name) => {
        const { formDetails } = this.state;
        const value = !formDetails[name].value;
        const obj = formDetails;
        obj[name] = { ...formDetails[name], value };
        this.setState({ formDetails: obj });
        const values = [formDetails.for_sale.value, formDetails.for_rent.value];
        const errors = validate(name, values, formDetails[name].validations);
        obj[name] = { ...formDetails[name], errors };
        this.setState({ formDetails: obj });
    }

    onSubmit = async e => {
        e.preventDefault();
        const { formDetails } = this.state;
        let isOK = true;
        let errors = undefined;
        for (let prop in formDetails) {
            const field = formDetails[prop];
            if (prop === 'for_sale') {
                const values = [formDetails.for_sale.value, formDetails.for_rent.value];
                errors = validate(prop, values, field.validations);
            } else {
                errors = validate(prop, field.value, field.validations);
            }
            if(prop === 'country' || prop ==='city'){
                if(formDetails[prop].value === "") this.setState({prop:this.props.location.apartment[prop]})
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
            const id = this.props.location.apartment.id
            for (let prop in formDetails) {
                if (formDetails[prop].value === "") continue
                result[prop] = formDetails[prop].value;
            }
            result.id = id;
            const data = setData(result, cookie.load('auth').id, this.state.files, this.state.cities);
            const isUpload = await api.editApartment(data, id);
            if (isUpload) {
                this.redirect()
            }
        }
    };
    handelImagesClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.setState({ imagesVisbilte: !this.state.imagesVisbilte });
    };
    handleChildClick = (e) => {
        e.stopPropagation();
    };
    redirect = () => {
        this.props.history.push("/my_apartments")
    }
    checkauthorize=()=>{
        const apartment = this.props.location.apartment
        const userCookie = cookie.load('auth')
        let apratment_userId = undefined;
        if (apartment) apratment_userId = apartment.user_id;
        return ((userCookie && userCookie.id === apratment_userId) || userCookie.role_id === 1)
    }
    render() {

        // let apratment_userId = undefined;
        const apartment = this.props.location.apartment
        // if (apartment) {     
        //    let  apratment_userId = apartment.user_id;}
        return (
            <div style={{ margin: '50px auto', width: '500px' ,minHeight:'676px'}}>
                {this.checkauthorize() ?
                    <div>
                        {this.state.imagesVisbilte && <UploadImages
                                                            type={"edit"}
                                                            apartmentId={apartment.id}
                                                            images={this.state.files}
                                                            handleChildClick={() => this.handleChildClick}
                                                            handleChange={this.inputChange}
                                                            imageChange={this.imageChange}
                                                            handleShow={this.handelImagesClick} />}
                        <Form onSubmit={this.onSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCountry">
                                    <Form.Label>Country</Form.Label>
                                    <input list={'country'} type={'text'} name={'country'} placeholder={apartment.country} className="form-control" onChange={this.inputChange} />
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
                                    <input list={'city'} type={'text'} name={'city'} placeholder={apartment.city_name} className="form-control" onChange={this.inputChange} />
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
                                    <Form.Control name='address' placeholder={apartment.address} onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.address.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridPrice">
                                    <Form.Label >Price</Form.Label>
                                    <span className="input-group-addon">$</span>
                                    <Form.Control name='price' placeholder={apartment.price} onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.price.errors}></InputErrors>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridRoom">
                                    <Form.Label>Number of rooms</Form.Label>
                                    <Form.Control name='number_of_room' placeholder={apartment.number_of_room ? apartment.number_of_room : ""} onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.number_of_room.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridnumber_of_bath">
                                    <Form.Label>Number of bahts</Form.Label>
                                    <Form.Control name='number_of_bath' placeholder={apartment.number_of_bath ? apartment.number_of_bath : ""} onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.number_of_bath.errors}></InputErrors>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridsqft">
                                    <Form.Label>sqft</Form.Label>
                                    <Form.Control name='sqft' placeholder={apartment.sqft} onBlur={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.sqft.errors}></InputErrors>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridProperty_type-">
                                    <Form.Label>Property Type</Form.Label>
                                    <Form.Control name='property_type' as="select" onBlur={this.inputChange}>
                                        <option value={apartment.property_type}>{apartment.property_type}</option>
                                        <option value='house' >House</option>
                                        <option value='ranch' >Ranch</option>
                                        <option value='land' >Land</option>
                                        <option value='condo'>Condo</option>
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
                                        checked={apartment.sale_status === "both" || apartment.sale_status === "sale" ? true : false}
                                        onChange={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.for_sale.errors}></InputErrors>
                                </Form.Group>
                                <Form.Group className={"d-flex justify-content-center align-items-center"} as={Col} controlId="formGridRent">
                                    <Form.Check
                                        name='for_rent'
                                        type="switch"
                                        id="for_rent"
                                        label="For rent"
                                        checked={apartment.sale_status === "both" || apartment.sale_status === "rent" ? true : false}
                                        onChange={this.inputChange} />
                                    <InputErrors errors={this.state.formDetails.for_rent.errors}></InputErrors>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} style={{ height: "150px" }}>
                                    <img className={'image-preview'}
                                        src={apartment.main_image ? `http://shielded-savannah-89374.herokuapp.com/${apartment.main_image}` : "http://shielded-savannah-89374.herokuapp.com/images/general/loadingApartment.jpg"} 
                                        multiple id={'image-preview-File1'} 
                                        alt='' />
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

export default withRouter(editApartment);