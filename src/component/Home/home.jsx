import React from 'react';
import {Link} from "react-router-dom";
import '../../css Folder/Main css/main.css'
import MainPageCities from "../../apartments/mainPageCities";
import MainPageCards from "../../apartments/mainPageCards";
import LinksFooter from "./linksFooter";
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state= {city:""}


    }
    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    render () {
        return(
            <section style={{overflow:'hidden'}}>
                <div id="undernavMain">
                    <img src="../images/vlogo.png" width="14px" height="14px" alt={''}/>
                    <p>Be Ready to Buy... How Much Can You Borrow?</p>
                    <button>Get Pre-Approved</button>
                </div>
                <div id="main">
                    <div className="content-main">
                        <div className="topmain">
                            <h1>The Home of Home Search<sup>℠</sup></h1>
                            <p>With the most complete source of homes for sale & real estate near you</p>
                            <ul className="center-nav">
                                <li><a href="/">BUY</a></li>
                                <li><a href="/">RENT</a></li>
                                <li><a href="/">JUST SOLD</a></li>
                                <li><a href="/">HOME VALUE</a></li>
                            </ul>
                            <form>
                                <input type="text" className="search-input"
                                       placeholder="Address, City, Neighborhood or Zip"
                                       name={'city'}
                                        onChange={this.handleInputChange}/>
                                <Link className="submit"  to={{pathname:'/apartments',state:{test:this.state.city}}} >Search</Link>
                            </form>
                            <div className="ohiowraper">
                                <a href="/">
                                    <div className="ohio">
                                        <img src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDHlqLKKBABGAEyCKDeGwZBCs4N" alt={''}/>
                                            <div><strong>Join realtor.com to help the victims of the recent tornadoes
                                                rebuild</strong></div>
                                            <div>
                                                <button className="hp-banner-cta">Donate Now</button>
                                            </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <MainPageCards apartments={this.props.apartments} loading={this.props.loading}/>
                <MainPageCities cities={this.props.cities} loading={this.props.loading}/>
                <div className="container-fluid">
                    <div className="warperdetails">
                        <div className="detailsheader">
                            <div>
                                <h2>What's happening in San Francisco, CA</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-around details">
                        <div className="col-6 col-md-2 text-center">
                            <a href="/">
                                <span>1,291</span>
                                <p>Homes for sale</p>
                            </a>
                        </div>
                        <div className="col-6 col-md-2 text-center">
                            <a href="/">
                                <span>1,291</span>
                                <p>Homes for sale</p>
                            </a>
                        </div>
                        <div className="col-6 col-md-2 text-center">
                            <a href="/">
                                <span>1,291</span>
                                <p>Homes for sale</p>
                            </a>
                        </div>
                        <div className="col-6 col-md-2 text-center">
                            <a href="/">
                                <span>1,291</span>
                                <p>Homes for sale</p>
                            </a>
                        </div>
                        <div className="col-6 col-md-2 text-center">
                            <a href="/">
                                <span>1,291</span>
                                <p>Homes for sale</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="hero-image" className="change-img-size">
                    <div className="topmain take-down">
                        <p className="d-none d-md-block">GUIES</p>
                        <h1>The Insider’s Guide to Buying a Home in New York City</h1>
                        <button className="d-none d-md-block">Donate Now</button>
                    </div>
                </div>
                <div className="container-fluid text-center background-img-style">
                    <div className="row">
                        <div className="col-md-6 my-3 m-none">
                            <div id="small-left-img" className="small-hero-img topmain change-img-size">
                                <h6>The Insider’s Guide to<br/>Renting in New York City</h6>
                            </div>
                        </div>
                        <div className="col-md-6 my-3 m-none">
                            <div id="small-right-img" className="small-hero-img topmain change-img-size ">
                                <h6>The Insider’s Guide to<br/>Selling in New York City</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row position-relative">
                        <div className="col-md-6 p-0 position-family">
                            <div id="family">
                                <img src="images/family_one.png" alt={""} />
                                <div className="family-content">
                                    <h2>Need a home loan? Get pre-approved</h2>
                                    <p>Find a lender who can offer competitive mortgage rates and help you with pre-approval.</p>
                                    <button id="family-button" className="submit">Get per-approved now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row position-relative flex-row-reverse" style={{borderBottom:'1px solid #ccc'}}>
                        <div className="col-md-6 p-0 position-family">
                            <div id="family">
                                <img src="images/family_two.png" alt={'searchPageLoading'}/>
                                <div className="family-content family-footer">
                                    <h2>Find Your Neighborhood</h2>
                                    <p>Do1ies it have pet-friendly rentals? What are the crime rates? How are the schools? Get important local information on the area you're most interested in.</p>
                                    <form>
                                        <div className="btn-group form-section">
                                            <input readOnly  id="searchinput" type="search" className="form-control" placeholder="Address, City, Zip or Neighborhood" value="Manhattan, NY"/>
                                                <button className="" aria-label="Search">
                                                    <span className="">Search</span>
                                                </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'footer-wrapper'}>
                    <div className="container-fluid">
                        <div className="row my-5 mx-auto" style={{width:'90%'}}>
                            <div className="col-md-6 col-lg-3">
                                <div>
                                    <img src="https://www.realtor.com/assets/prod/f3a0b89/static/images/home/nar-logo.png" height="80px" width="200px"  alt={""}/>
                                    <p>Find out how the NAR works for consumers and REALTORS®</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 links-section">
                                <p>Learn About N.A.R</p>
                                <ul>
                                    <li><a href="/">About NAR</a></li>
                                    <li><a href="/">Agent vs. REALTOR<sup>®</sup></a></li>
                                    <li><a href="/">Find an Appraiser</a></li>
                                    <li><a href="/">Commercial Services</a></li>
                                    <li><a href="/">NAR Global Alliances</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-3 links-section">
                                <p>For Homeowners</p>
                                <ul>
                                    <li><a href="/">Dreamy Ways to Add Functionality to Your Outdoor Space</a></li>
                                    <li><a href="/">Why Use a REALTOR<sup>®</sup> with the MRP?</a></li>
                                    <li><a href="/">Real Estate Today Radio</a></li>
                                    <li><a href="/">REALTORS<sup>®</sup>Relief Foundation</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-3 links-section">
                                <p>For REALTORS<sup>®</sup></p>
                                <ul>
                                    <li><a href="/">NAR’s iOi Summit: Innovation Worth Exploring</a></li>
                                    <li><a href="/">Earn free business boosting rewards with MVP!</a></li>
                                    <li><a href="/">REALTOR Benefits<sup>®</sup> Program</a></li>
                                    <li><a href="/">Center for REALTOR<sup>®</sup> Development</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <LinksFooter/>
                    <div className="commercial text-center">
                        <div className="my-4">
                            <a href="/">
                                <img src="https://tpc.googlesyndication.com/simgad/13245008257885262537" width="600" height="70" alt="" className="img_ad"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
    );
    }}
export default Home;




