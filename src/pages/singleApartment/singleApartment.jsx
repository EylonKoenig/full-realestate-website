import React from 'react';
import '../../css/apratmentCss/apratment.css'
import ApartmentFrom from "./singleApartmentForm";
import axios from "axios";


class singleApartment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartment:{},
            images:[],
            loading:true,
        }
    }
    componentDidMount(){
        this.getdata();
    }
    async getdata(){
        await axios.get(`http://localhost:5000/apartments/${this.props.aprId}`)
            .then(res => {
                this.setState({apartment:res.data[0],loading:false});
            });
        this.setState({images:this.state.apartment.images.toString().split(',')})
    }
    setData(){

    }
    // need to add axios for each single
    render() {
        const {apartment} = this.state;
        let carouselItems = [];
        let detailsArr = ['number_of_bath','number_of_room','sqft'];
        let detailsArrLabel = ['Beds','Rooms','sqft'];
        let status = null;
        if(apartment.sale_status === 'both'){
            status = ' sale or rent'
        } else if (apartment.sale_status === 'sale'){
            status = ' sale'
        } else {
            status = ' rent'
        }
        carouselItems.push(this.state.images.map((item,i) =>  {
            return (
                <div className='carousel-item' key={i}>
                    <img src={`/${this.state.images[i]}`} className="d-block w-100" alt="..."/>
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
                                <ApartmentFrom/>
                            </div>
                            <div className={'inside-carousel'}>
                                <div className={'carousel-overlay topleftimg'} style={{top:'unset'}}>
                                    <span className={'green-background'} style={{padding:'3px'}}>{apartment.description}</span>
                                    { (apartment.for_sale || apartment.for_rent) ?
                                        <span  style={{padding:'3px' ,background:'black',marginLeft:'5px' }}>
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
                                            <span className="value">{`For ${status}`}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {!this.state.loading &&
                        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "200px", width:"50%"}}>
                            <iframe title={'googleMaps'} src={`https://maps.google.com/maps?q=${(apartment.country).replace(/\s/g, '')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    frameBorder="0"
                                    style={{border:"0"}} allowFullScreen>
                            </iframe>
                        </div>
                        }
                    </div>
                </div>
            </div>

        )}}

export default singleApartment;