import React from 'react';
import { withRouter } from 'react-router-dom';

import '../../css/apratmentCss/apratment.css'
import ApartmentFrom from "./singleApartmentForm";
import api from '../../server-api/api'
import GoogleMap from "../../components/GoogleMap/googleMap";


class singleApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartment: {},
            images: [],
            loading: true,
        }
    }
    componentDidMount() {
            this.getdata();
    }
    async getdata() {
        const data = await api.getApartmentById(this.props.aprId);
        if(data.data.length === 0){
            this.props.history.push('/apartments')
        }
        this.setState({ apartment: data.data[0], loading: false });
        const images = this.state.apartment.images;
        if (images && images.length > 0) {
            this.setState({ images: this.state.apartment.images.toString().split(',') })
        }
    }
    getDate =()=>{
        let myDate = new Date(this.state.apartment.created_on);
        const test = myDate.getTime();
        const current = new Date();
        const result = (current-test)/1000;
        if(result/3600 < 24) return `${Math.ceil(result/3600)} Hours ago`;
        if(result/86400 < 24) return `${Math.ceil(result/86400)} Days ago`;
        if(result/604800  < 24) return `${Math.ceil(result/604800)} Weeks ago`;
        if(result/2629743  < 24) return `${Math.ceil(result/2629743)} Mnoths ago`;

    };
    render() {
        const { apartment } = this.state;
        let carouselItems = [];
        let detailsArr = ['number_of_bath', 'number_of_room', 'sqft'];
        let detailsArrLabel = ['Bath', 'Rooms', 'sqft'];
        let status = null;
        if (apartment.sale_status === 'both') {
            status = ' sale or rent'
        } else if (apartment.sale_status === 'sale') {
            status = ' sale'
        } else {
            status = ' rent'
        }
        carouselItems.push(this.state.images.map((item, i) => {
            return (
                <div className='carousel-item' key={i}>
                    <img src={`https://shielded-savannah-89374.herokuapp.com/${this.state.images[i]}`} className="d-block w-100" alt="..." />
                </div>
            )
        }));
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
                            <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel">
                                <div className="carousel-inner">
                                    {!this.state.loading &&
                                        <div className="carousel-item active">
                                            <img src={`https://shielded-savannah-89374.herokuapp.com/${apartment.main_image}`} className="d-block w-100" alt="..." data-interval="10000" ref={'cpDev1'} />
                                        </div>}
                                    {carouselItems}
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <div className={'from-wrapper'}>
                                <ApartmentFrom apartment={this.state.apartment}/>
                            </div>
                            <div className={'inside-carousel'}>
                                <div className={'carousel-overlay topleftimg'} style={{ top: 'unset' }}>
                                    <span className={'green-background'} style={{ padding: '3px' }}>{apartment.description}</span>
                                    {(apartment.for_sale || apartment.for_rent) ?
                                        <span style={{ padding: '3px', background: 'black', marginLeft: '5px' }}>
                                            {`For ${status}`}
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
                                    {detailsArr.map(function (item, i) {
                                        return <li key={i}><span><b>{apartment[item] ? apartment[item] : ""}</b></span><span>{` ${detailsArrLabel[i]}`}</span></li>
                                    })}
                                </ul>
                                <ul className={'pictuerdetails'}>
                                    <li>{`${apartment.city_name}`}</li>
                                    <li>{`${apartment.country}`}</li>
                                    <li>{`${apartment.address}`}</li>
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
                                <span className="key">Time on site</span>
                                <span className="value">{   this.getDate()}</span>
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
                                            <span className="key">Year Built</span>
                                            <span className="value">1955</span>
                                        </div>
                                    </li>
                                    <li className="col-xs-6 col-md-4 indicator">
                                        <div className="">
                                            <span className="key">Status</span>
                                            <span className="value">{`For ${status}`}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {!this.state.loading &&
                            <GoogleMap address={apartment.city_name} />
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(singleApartment);

