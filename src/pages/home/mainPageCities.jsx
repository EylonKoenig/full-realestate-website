import React from 'react';
import Card from "./components/card/Card";
import './css/search-line.css';
import '../css/undernave.css';
import '../css/reset.css';
import '../css/phonenav.css';
import '../css/styletopnav.css';
import '../App.css'
import {searchLoadingData} from "../data-app/searchLoadingData";
import SearchPageLoading from "../components/Loading/searchPageLoading";


class MainPageCities extends React.Component{
    render() {
        return (
            <div className={'container-fluid my-5'}>
                <div className="top-image-page my-3 d-flex">
                    <div>
                        <h2>Recommended neighborhoods</h2>
                        <div>
                            <p>Based on your previous search
                            </p>
                        </div>
                    </div>
                </div>
                <div id={'apartment_row'} className={'row'}>
                    {this.props.loading ? <SearchPageLoading array={searchLoadingData.filter(apartment => apartment.id <= 4)}/> :
                    this.props.cities.filter(city => city.id <= 4  ).map((item,i) => {
                        return (
                            <Card {...item} cardType={'city'}  key = {i}/>
                        )})
                    }
                </div>
            </div>
        )
    }
}

export default MainPageCities;