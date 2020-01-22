import React from 'react';

class LinksNAR extends React.Component {
    render () {
        return(
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
        );
    }}
export default LinksNAR;

