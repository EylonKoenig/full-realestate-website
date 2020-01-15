import React from 'react';
import Card from "../../components/card/Card";
import '../../css/galleryCss/search-line.css';
import '../../css/galleryCss/undernave.css';
import '../../css/galleryCss/reset.css';
import '../../css/galleryCss/phonenav.css';
import '../../css/galleryCss/styletopnav.css';
import '../../App.css'

import {searchLoadingData} from "../../data-app/searchLoadingData";
import SearchPageLoading from "../../components/Loading/searchPageLoading";

class MainPageCards extends React.Component{
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.loading ? <SearchPageLoading array={searchLoadingData.slice(0,4)}/> :
                    <div className={'container-fluid'}>
                        <div className="warperdetails">
                                <h2>Latest Real Estate Update</h2>
                        </div>
                        <div id={'apartment_row'} className={'row'}>
                            {this.props.apartments.map((item,i) => {
                                return (
                                    <Card {...item} cardType={'apartment'}  key = {i}/>
                                )})
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default MainPageCards;