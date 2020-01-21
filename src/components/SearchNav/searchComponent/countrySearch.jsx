import React from 'react';

import api from '../../../server-api/api';

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
    async getdata() {
        const data = await api.getRelevantCountries()
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CountrySearch;



