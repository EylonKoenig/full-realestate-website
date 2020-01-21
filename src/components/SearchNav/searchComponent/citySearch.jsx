import React from 'react';

import api from '../../../server-api/api'

class CitySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [],
        }
    }
    componentDidMount() {
        this.getdata(this.props.country);
    }
    async getdata(query) {
        const data = await api.getRelevantCities(query)
        this.setState({ cities: data.data });
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
                            {this.state.cities &&
                                <div>
                                    <label htmlFor="allCities">Select  City</label>
                                    <input id="allCities" name="city" type="radio" value=""
                                        onChange={handleInputChange} />
                                    {this.state.cities.map((country, index) => {
                                        return (
                                            <div key={index} className="">
                                                <label htmlFor={country}>{country}</label>
                                                <input id={`${country}`} name="city" type="radio" value={country}
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
export default CitySearch;



