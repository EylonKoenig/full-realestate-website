import React from 'react';
<<<<<<< HEAD:src/pages/singleApartment/singleApartment.jsx
// import {agents} from './data-app/agents';
// import {Link} from "react-router-dom";
import '../../css/apratment css/apratment.css'
import AprtmentFrom from "../pages/singleApartment/singleApartmentForm";
=======
import '../css Folder/apratment css/apratment.css'
import AprtmentFrom from "./apartmentForm";
>>>>>>> origin/master:src/apartments/singelApartment.jsx

class SingelApartment extends React.Component {
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
    // need to add axios for each single
    render() {
        const {apartment} = this.state;
        let carouselItems = [];
        let detailsArr = ['number_of_bath','number_of_room','sqft'];
        let detailsArrLabel = ['Beds','Rooms','sqft'];
        let statue = '';
        let city = apartment.city_name;
        const images = apartment.images.toString().split(',');
        let status = null;
        if(apartment.sale_status === 'both'){
            status = ' sale or rent'
        } else if (apartment.sale_status === 'sale'){
            status = ' sale'
        } else {
            status = ' rent'
        }
        carouselItems.push(images.map((item,i) =>  {
            return (
                            <div className='carousel-item' key={i}>
                 <img src={`/${images[i]}`} className="d-block w-100" alt="..."/>
                             </div>
            )
        }));
        console.log(this.props);
        function numberWithCommas(x) {
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
                                    <img src={`/${apartment.main_image}`} className="d-block w-100" alt="..." data-interval="10000" ref={'cpDev1'}/>
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
                            <AprtmentFrom/>
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
                                <li>{`${apartment.city_name}`}</li>
                                <li>{`${apartment.country}`}</li>
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
                        <iframe title={'googleMaps'} src={`https://maps.google.com/maps?q=${(apartment.country).replace(/\s/g, '')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                frameBorder="0"
                                style={{border:"0"}} allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

    )}}

export default SingelApartment;