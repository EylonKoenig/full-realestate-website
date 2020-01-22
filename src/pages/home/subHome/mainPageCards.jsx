import React from 'react';


import {searchLoadingData} from "../../../data-app/searchLoadingData";
import SearchPageLoading from "../../../components/Loading/searchPageLoading";

import Gallery from '../../../components/gallery';

class MainPageCards extends React.Component{
    render() {
        return (
            <div>
                {this.props.loading ? <SearchPageLoading loadingApartments={searchLoadingData.slice(0,4)}/> :
                    <div className={'container-fluid'}>
                        <div className="warperdetails">
                                <h2>Latest Real Estate Update</h2>
                        </div>
                    <Gallery apartments={this.props.apartments} cardType={'apartment'}/>
                    </div>
                }
            </div>
        )
    }
}

export default MainPageCards;