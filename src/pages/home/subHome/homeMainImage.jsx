import React from 'react';
import {Link} from "react-router-dom";

class HomeMainImage extends React.Component {
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
            <div id="main">
                <div className="content-main">
                    <div className="topmain">
                        <h1>The Home of Home Search<sup>℠</sup></h1>
                        <p>With the most complete source of homes for sale & real estate near you</p>
                        <ul className="center-nav">
                            {/* <li><a href="/">BUY</a></li> */}
                            <li><Link  to={{pathname:'/apartments',search:'?sale_status=sale'}}>BUY</Link></li>
                            <li><Link  to={{pathname:'/apartments',search:'?sale_status=rent'}}>BUY</Link></li>
                            <li><Link  to={{pathname:'/apartments'}}>JUST SOLD</Link></li>
                            <li><Link  to={{pathname:'/apartments'}}>HOME VALUE</Link></li>
                        </ul>
                        <form>
                            <input type="text" className="search-input"
                                   placeholder="Address, City, Neighborhood or Zip"
                                   name={'city'}
                                   onChange={this.handleInputChange}/>
                            <Link className="submit"  to={{pathname:'/apartments',state:{data:this.state.city}}}>Search</Link>
                        </form>
                        <div className="ohiowraper">
                            <a href="/">
                                <div className="ohio">
                                    <img src="https://tpc.googlesyndication.com/pagead/imgad?id=CICAgKDHlqLKKBABGAEyCKDeGwZBCs4N" alt={''}/>
                                    <div>
                                        <strong>Join realtor.com to help the victims of the recent tornadoes rebuild</strong>
                                    </div>
                                    <div>
                                        <button className="hp-banner-cta">Donate Now</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }}
export default HomeMainImage;

