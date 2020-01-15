import React from 'react';
import axios from "axios";

class CountrySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counties: [],
        }
    }
    componentDidMount() {
        this.getdata();
    }
    async getdata(query = "") {
        const data = await axios.get(`http://localhost:5000/apartments/all/countries`);
        this.setState({ counties: data.data });
    }
    render() {
        const handleInputChange = this.props.handleInputChange;
        return (
            <div className="dropdown-menu inside-search-button price-dropdown" role="menu" aria-labelledby="menu1">
                <div className="head-sub-main">
                    <h6>Country</h6>
                </div>
                <div className="d-flex">
                    <div className={'d-flex'}>
                        <div className="price-row">
                            <input id=""
                                className="price-box"
                                name={'country'}
                                type="text"
                                list={'price-input'}
                                placeholder="Enter Country"
                                onChange={handleInputChange} />
                            {this.state.counties &&
                                <div>
                                    <label htmlFor="allCountry">Select Country</label>
                                    <input id="allCountry" name="country" type="radio" value=""
                                        onChange={handleInputChange} />
                                    {this.state.counties.map((country, index) => {
                                        return (
                                            <div key={index} className="">
                                                <label htmlFor={country}>{country}</label>
                                                <input id={`${country}`} name="country" type="radio" value={country}
                                                    onChange={handleInputChange} />
                                            </div>
                                        );
                                    })}
                                </div>
                            }
                            {/* <input id="priceCheck4k" name="priceCheckMin" type="radio" value="400000"
                                onChange={handleInputChange} />
                            <label htmlFor="priceCheck4k">$400k</label>

                            <input id="priceCheck8k" name="priceCheckMin" type="radio" value="800000"
                                onChange={handleInputChange} />
                            <label htmlFor="priceCheck8k">$800k</label>

                            <input id="priceCheck1.2m" name="priceCheckMin" type="radio" value="1200000"
                                onChange={handleInputChange} />
                            <label htmlFor="priceCheck1.2m">$1.2M</label>

                            <input id="priceCheck1.6m" name="priceCheckMin" type="radio" value="1600000"
                                onChange={handleInputChange} />
                            <label htmlFor="priceCheck1.6m">$1.6M</label>

                            <input id="priceCheck2m" name="priceCheckMin" type="radio" value="200000"
                                onChange={handleInputChange} />
                            <label htmlFor="priceCheck2m">$2M</label>

                            <input id="priceCheck2.4m" name="priceCheckMin" type="radio" value="2400000"
                                onChange={handleInputChange} />
                            <label htmlFor="priceCheck2.4m">$2.4m</label>

                            <input id="priceCheckanymin" name="priceCheckMin" type="radio" value="0"
                                onChange={handleInputChange} />
                            <label htmlFor="priceCheckanymin">Any Price</label> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CountrySearch;



