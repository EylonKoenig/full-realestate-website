import React from 'react';
// import {agents} from './data-app/agents';
// import {Link} from "react-router-dom";
import '../../css/apratmentCss/apratment.css'
import ApartmentFrom from "./singleApartmentForm";


class SingleApartment extends React.Component {
    constructor(props) {
        super(props);
        const apartmentId = this.props.aprId;
        const apratment = this.getApartmentDataById(apartmentId);
        this.state = {
            apartment:apratment,
        }
    }
    getApartmentDataById = (id) => {
            return this.props.apartments.find(apartment => apartment.id === parseInt(id))
        };
    getCitiesDataById = (id) => {
        return this.props.cities.find(city => city.id === parseInt(id))
    };
    render() {
        const {apartment} = this.state;
        let carouselItems = [];
        let detailsArr = ['number_of_beds','number_of_rooms','sqft'];
        let detailsArrLabel = ['Beds','Rooms','sqft'];
        let statue = '';
        let city = this.getCitiesDataById(apartment.cityId);
        if (apartment.for_rent || apartment.for_sale){
            statue = (apartment.for_sale) ? 'Sale' : 'Rent';
        }
        carouselItems.push(apartment.images.map((item,i) =>  {
            return (
                            <div className='carousel-item' key={i}>
                 <img src={`../images/apartment/${apartment.images[i]}`} className="d-block w-100" alt="..."/>
                             </div>
            )
        }));
        function numberWithCommas(x) {
            x = x*1000000;
            x = Math.round(x);
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    return (
        <div className={'container-fluid'}>
            <div className={'apartment-wrapper'}>
                <section className={'agent-details'}>
                    {/*<p><b>Presented by:</b> {agents[apartment.owner].name}</p>*/}
                </section>
                <div className={'carousel-wrapper position-relative'}>
                    <div className={'carousel-cover'}>
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={`../images/apartment/${apartment.main_image}`} className="d-block w-100" alt="..." data-interval="10000" ref={'cpDev1'}/>
                                </div>
                                {carouselItems}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                        <div className={'from-wrapper'}>
                            <ApartmentFrom/>
                        </div>
                        <div className={'inside-carousel'}>
                            <div className={'carousel-overlay topleftimg'} style={{top:'unset'}}>
                                <span className={'green-background'} style={{padding:'3px'}}>{apartment.description}</span>
                                { (apartment.for_sale || apartment.for_rent) ?
                                    <span  style={{padding:'3px' ,background:'black',marginLeft:'5px' }}>
                                        {`For ${statue}`}
                                    </span> : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'apartment-summary py-3'}>
                    <div className={'details-wrapper'}>
                        <div>
                        <p>{`$${numberWithCommas((apartment.price))}`}</p>

                            <ul className={'apartment-details pictuerdetails'}>
                                { detailsArr.map(function(item, i){
                                    return  <li key={i}><span><b>{apartment[item] ? apartment[item] : ""}</b></span><span>{` ${detailsArrLabel[i]}`}</span></li>
                            })}
                            </ul>
                            <ul className={'pictuerdetails'}>
                                <li>{`${city.label}`}</li>
                                <li>{`${city.country}`}</li>
                            </ul>
                        </div>
                        <div className={'container-fluid SubDetails'}>
                            <ul className="row">
                                <li className="col-xs-6 col-md-4 indicator">
                                    <div className="">
                                        <span className="key">Property Type</span>
                                        <span className="value">Co-op</span>
                                    </div>
                                </li>
                                <li className="col-xs-6 col-md-4 indicator">
                                    <div className="">
                                        <span className="key">Days on site</span>
                                        <span className="value">14 Hours</span>
                                    </div>
                                </li>
                                <li className="col-xs-6 col-md-4 indicator">
                                    <div className="">
                                        <span className="key">Year Built</span>
                                        <span className="value">1955</span>
                                    </div>
                                </li>
                                <li className="col-xs-6 col-md-4 indicator">
                                    <div className="">
                                        <span className="key">Style</span>
                                        <span className="value">Co-op</span>
                                    </div>
                                </li>
                                <li className="col-xs-6 col-md-4 indicator">
                                    <div className="">
                                        <span className="key">Status</span>
                                        <span className="value">{`For ${statue}`}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "200px", width:"50%"}}>
                        <iframe title={'googleMaps'} src={`https://maps.google.com/maps?q=${(city.country+city.label).replace(/\s/g, '')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                frameBorder="0"
                                style={{border:"0"}} allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

    )}}

export default SingleApartment;