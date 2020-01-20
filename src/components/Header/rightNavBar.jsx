import React from 'react';
import cookie from 'react-cookies'
import { Link } from "react-router-dom";

class RightNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    logout(){
        cookie.remove('auth', { path: '/' })
        window.location.reload();
    }

    render() {
        return (
            <div className="topright align-center ml-auto">
                <ul className="navigation">
                    <li className="iphone d-none d-lg-block">
                        <a href="/">
                            <img src="https://i.imgur.com/YVrlccy.png" alt={''} />
                        </a>
                        <div className="navphone">
                            <div className='navphone-firstrow'>
                                <img src="https://i.imgur.com/kJm5beY.png" alt={''} />
                                <div>
                                    <a href="/">Realtor.com® mobile apps</a>
                                    <p>Find homes for sale or rent on <br />iPhone, iPad, and Android</p>
                                </div>
                            </div>
                            <ul className="navphone-lastpart">
                                <li>
                                    <img src="https://i.imgur.com/84e94sp.png" alt={''} />
                                    <div>
                                        <a href="/" title="Get the Realtor.com® Real Estate app">Realtor.com® Real
                                                Estate</a>
                                        <ul className="iosandoridnav">
                                            <li><a href="/">iOS</a></li>
                                            <li><span>|</span></li>
                                            <li><a href="/">Android</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://i.imgur.com/oA4SEKw.png" alt={''} />
                                    <div>
                                        <a href="/" title="Get the Realtor.com® Real Estate app">Realtor.com® Real
                                                Estate</a>
                                        <ul className="iosandoridnav">
                                            <li><a href="/">iOS</a></li>
                                            <li><span>|</span></li>
                                            <li><a href="/">Android</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                    {!this.props.user ?
                        <div className={'d-flex'}>
                            <li className="navigation"><button  id={"loginButton"} onClick={this.props.loginHandelClick()}>Log In</button></li>
                            <li className="navigation"><button onClick={this.props.signUpHandelClick()}>Sign Up</button></li>
                            <li style={{ borderBottom: 'none' }}><span>|</span></li>
                            <li className="navigation"><a href="/">Advertise</a></li>
                        </div>
                        : <div className={'d-flex'}>
                            <li className="navigation"><a href="/">Hello {this.props.user.first_name}</a></li>
                            <li className="navigation" id='submission'><a href="/">Submission</a>
                                <div className={'submissionMenu'} id='submissionMenu'>
                                <Link to={'/postApartment'}>Add Property</Link>
                                <Link to={'/'}>Wish List</Link>
                                <Link to={'/'}>Edit Property</Link>
                                <Link to={'/'}>Edit Profile</Link>
                                <button onClick={this.logout}>LOGOUT</button>
                                </div>
                            </li>
                        </div>
                    }
                </ul>
            </div>
        )
    }
}

export default RightNavBar;
