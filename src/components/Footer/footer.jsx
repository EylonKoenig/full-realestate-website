import React from 'react';
import IconBrand from "./icon-brand";
import {withRouter} from 'react-router-dom';
class Footer  extends React.Component{
    render() {

        return (
            <footer className={window.location.pathname.length > 1 ? 'pushBottom' : undefined} style={{display:window.location.pathname === '/apartments' || window.location.pathname === '/my_apartments'  ? 'none' : "block"}}>
                <div className={`container-fluid social-media p-0`}>
                    <div style={{background: `#333`}}>
                        <div className="top-social-media">
                            <div className="social-media-icon">
                                <ul className="px-3 justify-content-center">
                                    <li className="btn btn-li btn-light"><a href="https://www.facebook.com/realtor.com"
                                                                            title="Like us on Facebook">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="24">
                                            <path fill="#000"
    d="M3.7 23.5H8V13.1h3.7l.5-4.5H8.1v-3c0-1 .7-1.6 1.6-1.6h2.7V0H8.6a5 5 0 0 0-5 5v3.6H0v4.5h3.7v10.4z"/>
                                        </svg>
                                    </a></li>
                                    <li className="btn btn-li btn-light"><a href="https://twitter.com/REALTORdotcom"
                                                                            title="Follow us on Twitter">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25">
                                            <path fill="#000"
    d="M27.1 6.3A17.6 17.6 0 0 1 9.7 24.6c-3.5 0-6.8-1-9.5-2.8l1.5.1c2.9 0 5.5-1 7.6-2.6-2.7 0-5-1.9-5.7-4.3a6 6 0 0 0 2.8-.1c-2.8-.6-5-3-5-6v-.1c.9.4 1.8.7 2.8.8a6.1 6.1 0 0 1-1.9-8.3C5.3 5.1 10 7.5 15 7.8a6.2 6.2 0 0 1 6-7.6c1.8 0 3.4.8 4.5 2 1.4-.3 2.7-.8 3.9-1.5A6.2 6.2 0 0 1 26.7 4a12 12 0 0 0 3.5-1c-.8 1.2-1.9 2.3-3 3.2"/>
                                        </svg>
                                    </a></li>
                                    <li className="btn btn-li btn-light"><a href="https://www.linkedin.com/company/realtor-com/"
                                                                            title="Connect on Linked In">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25">
                                            <path fill="#000"
    d="M1 8.3h5.5v16.3H1V8.3zM3.8 6C1.8 6 .6 4.8.6 3.2.7 1.6 1.9.4 3.8.4c1.9 0 3 1.2 3 2.8 0 1.6-1.1 2.9-3 2.9zm22.6 18.5h-5.5v-8.7c0-2.2-.8-3.7-2.8-3.7a3 3 0 0 0-2.8 2c-.2.3-.2.8-.2 1.3v9H9.6V8.4H15v2.3c.7-1.1 2-2.7 5-2.7 3.6 0 6.3 2.3 6.3 7.3v9.4z"/>
                                        </svg>
                                    </a></li>
                                    <li className="btn btn-li btn-light"><a
                                        href="https://www.instagram.com/realtordotcom/?hl=en"
                                        title="Follow us on Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                            <path fill="#000"
                                                  d="M23.3 17.6c0 3.5-2.9 6.4-6.4 6.4H6.4A6.4 6.4 0 0 1 0 17.6V6.4C0 3 2.9 0 6.4 0H17c3.5 0 6.4 2.9 6.4 6.4v11.2z">
                                            </path>
                                            <path fill="#FFF" d="M20.3 4.9a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0">
                                            </path>
                                            <path stroke="#FFF"
                                                  d="M17.4 12c-.1 3.1-2.6 5.7-5.8 5.7A5.7 5.7 0 0 1 6 12c0-3.2 2.6-5.8 5.7-5.8 3.9.2 5.8 2.6 5.8 5.8z">
                                            </path>
                                        </svg>
                                    </a></li>
                                    <li className="btn btn-li btn-light"><a href="https://www.pinterest.com/realtordotcom/"
                                                                            title="Find us on Pinterest">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                            <path fill="#000"
                                                  d="M12 0a12 12 0 0 0-4.8 23c0-.8 0-1.9.2-2.8l1.5-6.5s-.3-.8-.3-1.9c0-1.8 1-3.1 2.3-3.1 1 0 1.6.8 1.6 1.8s-.7 2.7-1 4.3C11 16 12 17 13.2 17c2.3 0 3.8-3 3.8-6.4 0-2.6-1.7-4.6-5-4.6-3.6 0-5.9 2.7-5.9 5.7 0 1 .3 1.8.8 2.4.2.2.3.4.2.7l-.3 1c0 .2-.3.3-.6.2-1.6-.7-2.4-2.5-2.4-4.6C3.9 8.1 6.8 4 12.5 4 17 4 20 7.4 20 11c0 4.6-2.7 8.1-6.5 8.1-1.3 0-2.5-.7-3-1.5L9.9 21a10 10 0 0 1-1.2 2.6A12 12 0 1 0 12 0">

                                            </path>
                                        </svg>
                                    </a></li>
                                    <li className="btn btn-li btn-light"><a href="https://www.youtube.com/user/RealtorDotCom"
                                                                            title="Follow our You Tube Channel">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                                            <path fill="#000"
                                                  d="M0 2C0 .9.9 0 2 0h20a2 2 0 0 1 2 2v15.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.6 3.2V14.5l.5-.3 7.2-3.8 1-.5.6-.3-.5-.3-7.8-4-.5-.3-.5-.3v.5z">

                                            </path>
                                        </svg>
                                    </a></li>
                                </ul>
                            </div>
                        <IconBrand/>
                        </div>
                    </div>
                    <div className="row text-white flex-column social-footer m-auto" style={{width: '90%'}}>
                        <ul className="list-group list-group-horizontal">
                            <li><a href="https://www.realtor.com/about/" title="About realtor.com"
                                   data-omtag="footer:corp:about">About
                                us</a></li>
                            <li><a href="https://www.realtor.com/careers/" title="Careers at realtor.com"
                                   data-omtag="footer:corp:careers">Careers</a></li>
                            <li><a href="/" title="Your feedback" data-omtag="footer:corp:feedback">Feedback</a></li>
                            <li><a href="https://news.move.com/" title="Media Room" data-omtag="footer:corp:mediaRoom">Media
                                room</a>
                            </li>
                            <li><a href="https://www.realtor.com/privacy-policy/#/oba_anchor" title="Ad Choices"
                                   data-omtag="footer:corp:ad_choices">Ad Choices</a></li>
                            <li><a href="https://marketing2.realtor.com/exhibit/" title="Advertise with us"
                                   data-omtag="footer:corp:advertise">Advertise with us</a></li>
                            <li><a href="https://support.realtor.com/s/#iid=rdc_hdr_realtors_support" title="Agent support"
                                   data-omtag="footer:corp:agentSupport">Agent support</a></li>
                            <li><a href="https://www.realtor.com/privacy-policy/" title="Privacy policy"
                                   data-omtag="footer:corp:privacy">Privacy</a></li>
                            <li><a href="https://www.realtor.com/terms-of-service" title="Terms of use"
                                   data-omtag="footer:corp:terms">Terms</a></li>
                            <li><a href="https://www.realtor.com/homemade/" title="From our home to yours" data-omtag="">Home
                                Made</a>
                            </li>
                            <li><a href="https://techblog.realtor.com/" title="Our tech and engineering blog" data-omtag="">Tech
                                Blog</a></li>
                            <li><a href="https://www.realtor.com/sitemap" title="Realtor.com site map"
                                   data-omtag="footer:corp:sitemap">Sitemap</a></li>
                        </ul>
                        {window.location.pathname.length === 1 && <div>
                            <h6>Products</h6>
                            <ul className="list-group list-group-horizontal">
                                <li><a href="https://marketing.realtor.com" title=""
                                       data-omtag="footer:products:realsuite">Leads &amp; Branding</a></li>
                                <li><a href="https://www.listhub.com/home.html" title=""
                                       data-omtag="footer:products:listHub">ListHub</a>
                                </li>
                                <li><a href="https://www.topproducer.com" title="" data-omtag="footer:products:topProducer">Top
                                    Producer</a>
                                </li>
                                <li><a href="https://www.topproducer.com" title="" data-omtag="footer:products:marketSnapshot">Market
                                    Snapshot</a></li>
                                <li><a href="https://www.fivestreet.com/" title=""
                                       data-omtag="footer:products:fiveStreet">FiveStreet</a>
                                </li>
                                <li><a href="https://www.move.com" title="" data-omtag="footer:partners:move">Move.com</a></li>
                                <li><a href="https://www.relocation.com/" title=""
                                       data-omtag="footer:partners:relocation">Relocation</a>
                                </li>
                                <li><a href="https://www.moving.com" title="" data-omtag="footer:partners:moving">Moving.com</a>
                                </li>
                                <li><a href="https://www.realtor.com/international/" title=""
                                       data-omtag="footer:network:international">International</a></li>
                                <li><a href="https://www.seniorhousingnet.com" title=""
                                       data-omtag="footer:network:senior">SeniorHousingNet.com</a></li>
                                <li><a href="https://www.doorsteps.com" title="" data-omtag="footer:network:doorsteps">Doorsteps</a>
                                </li>
                                <li><a
                                    href="https://www.remodelista.com/?utm_source=realtor&amp;amp;utm_medium=top_nav&amp;amp;utm_campaign=rdc_nav/"
                                    title="" data-omtag="footer:network:remodelista">Remodelista</a></li>
                                <li><a
                                    href="https://www.gardenista.com/?utm_source=realtor&amp;amp;utm_medium=top_nav&amp;amp;utm_campaign=rdc_nav"
                                    title="" data-omtag="footer:network:gardenista">Gardenista</a></li>
                            </ul>
                            <h6>News Corp</h6>
                            <ul className="list-group list-group-horizontal">
                                <li><a href="https://www.barrons.com" title=""
                                       data-omtag="footer_menu:nc:network:barrons">Barrons</a></li>
                                <li><a href="https://www.checkout51.com" title="" data-omtag="footer_menu:nc:network:checkout_51">Checkout
                                    51</a></li>
                                <li><a href="https://www.fnlondon.com" title="" data-omtag="footer_menu:nc:network:financial_news">Financial
                                    News</a></li>
                                <li><a href="https://www.harpercollins.com/" title=""
                                       data-omtag="footer_menu:nc:network:harper_collins">Harper
                                    Collins</a></li>
                                <li><a href="https://www.mansionglobal.com/" title=""
                                       data-omtag="footer_menu:nc:network:mansion_global">Mansion
                                    Global</a></li>
                                <li><a href="https://www.marketwatch.com" title="" data-omtag="footer_menu:nc:network:market_watch">Market
                                    Watch</a></li>
                                <li><a href="https://nypost.com/" title="" data-omtag="footer_menu:nc:network:new_york_post">New
                                    York
                                    Post</a></li>
                                <li><a href="https://www.rea-group.com" title="" data-omtag="footer_menu:nc:network:rea">REA
                                    Group</a></li>
                                <li><a href="https://storyful.com/" title=""
                                       data-omtag="footer_menu:nc:network:storyful">Storyful</a></li>
                                <li><a href="https://www.wsj.com" title="" data-omtag="footer_menu:nc:network:wall_street_journal">Wall
                                    Street Journal</a></li>
                                <li><a href="https://www.makaan.com" title=""
                                       data-omtag="footer_menu:nc:network:makaan">Makaan.com</a></li>
                                <li><a href="https://housing.com" title=""
                                       data-omtag="footer_menu:nc:network:housing">Housing.com</a></li>
                                <li><a href="https://www.proptiger.com" title=""
                                       data-omtag="footer_menu:nc:network:proptiger">PropTiger.com</a></li>
                            </ul>
                        </div>}
                        <small className={'copyRights'}>© 1995-2019 <a href="//www.nar.realtor"
                                                                       title="National Association of REALTORS website">National
                            Association of REALTORS<sup>®</sup></a> and <a href="//www.move.com/" title="Move, Inc. website">Move,
                            Inc.</a> All rights reserved.</small>
                    </div>
                </div>
            </footer>
        )
    }
}


export default withRouter(Footer);