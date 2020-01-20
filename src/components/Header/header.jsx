import React from 'react';
import cookie from 'react-cookies'

import '../../css/galleryCss/styletopnav.css';
import '../../css/galleryCss/phonenav.css'
import MainLine from "./mainLine";
import RightNavBar from './rightNavBar';
import { headerData } from '../../data-app/headerData'
import { Link } from "react-router-dom";
import LogIn from '../Forms/loginAndSignup/logIn'
import SignUp from "../Forms/loginAndSignup/signUp";
import '../../css/loginAndSignupCss/loginAndSignup.css'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true,
            login: false,
            singUp: false,
            user: cookie.load('auth')
        };
        this.onLogin = this.onLogin.bind(this)
        this.onLogout = this.onLogout.bind(this)
    }
    // componentWillMount() {
    //     this.state = { user: cookie.load('auth') }
    // }

    onLogin(user) {
        this.setState({ user })
        cookie.save('user', user, { path: '/' })
    }

    onLogout() {
        cookie.remove('user', { path: '/' })
    }

    loginHandelClick = () => {
        this.setState({
            login: !this.state.login,
        })
    };

    signUpHandelClick = () => {
        this.setState({
            singUp: !this.state.singUp,
        });
    };

    activateSignupAndLogin = () => {
        this.loginHandelClick();
        this.signUpHandelClick();
    };

    handleChildClick = (e) => {
        e.stopPropagation();
    };

    handelClick = () => {
        this.setState({ isOpen: !this.state.isOpen });
        if (this.state.isOpen) {
            document.getElementById("header").style.position = 'fixed'
        } else {
            document.getElementById("header").style.position = 'relative'
        }

    };
    render() {
        // if (!this.state.isOpen){
        //     document.getElementById('navbarNav').onclick = function() {
        //         document.getElementById('header-button').click()
        //     };
        // }
        return (
            <div id={'wraper'}>
                <nav className={'header navbar navbar-expand-lg navbar-light'} id={'header'}>
                    <button id={'header-button'}
                        className="navbar-toggler burger-button"
                        type="button"
                        onClick={this.handelClick}
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="true"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="naverbar-position">
                        <div id="logo" className="navbar-brand ">
                            <Link to={'/'}><img src="http://localhost:5000/images/general/logo.png" width="150px" alt={''} /></Link>
                        </div>
                        <div id="navbarNav" className="collapse navbar-collapse">
                            <ul className={"navigation navbar-nav order-lg-3 navbar-items"}>
                                {headerData.map((item, i) => {
                                    return (
                                        <MainLine {...item} index={i} key={i} />
                                    )
                                })}
                            </ul>
                        </div>
                        <RightNavBar loginHandelClick={() => this.loginHandelClick}
                            signUpHandelClick={() => this.signUpHandelClick}
                            user={this.state.user} />
                    </div>
                </nav>
                {this.state.login ?
                    <div style={{ position: 'absolute', top: '0' }} onClick={() => this.loginHandelClick()} >
                        <div id={"login"} className="container-fluid login_or_singUp_page">
                            <LogIn handleChildClick={() => this.handleChildClick} activateSignupAndLogin={() => this.activateSignupAndLogin} loginHandelClick={() => this.loginHandelClick()} />
                        </div>
                    </div>
                    : null
                }
                {this.state.singUp ?
                    <div style={{ position: 'absolute', top: '0' }} onClick={this.signUpHandelClick}>
                        <div className="container-fluid login_or_singUp_page"  >
                            <SignUp handleChildClick={() => this.handleChildClick} activateSignupAndLogin={() => this.activateSignupAndLogin} />
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default Header;