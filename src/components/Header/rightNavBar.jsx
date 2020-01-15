import React from 'react';

class RightNavBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="topright align-center ml-auto">
                <ul className="navigation">
                    <li className="iphone d-none d-lg-block">
                        <a href="/">
                            <img src="https://i.imgur.com/YVrlccy.png" alt={''}/>
                        </a>
                        <div className="navphone">
                            <div className='navphone-firstrow'>
                                <img src="https://i.imgur.com/kJm5beY.png" alt={''}/>
                                <div>
                                    <a href="/">Realtor.com® mobile apps</a>
                                    <p>Find homes for sale or rent on <br/>iPhone, iPad, and Android</p>
                                </div>
                            </div>
                            <ul className="navphone-lastpart">
                                <li>
                                    <img src="https://i.imgur.com/84e94sp.png" alt={''}/>
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
                                    <img src="https://i.imgur.com/oA4SEKw.png" alt={''}/>
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
                    <li className="navigation"><button onClick={this.props.loginHandelClick()}>Log In</button></li>
                    <li className="navigation"><button onClick={this.props.signUpHandelClick()}>Sign Up</button></li>

                    <li style={{borderBottom:'none'}}><span>|</span></li>
                    <li className="navigation"><a href="/">Advertise</a></li>
                </ul>
            </div>
        )
    }
}

export default RightNavBar;
