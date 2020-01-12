import React from 'react';
import Card from "../../components/card/Card";
import '../../css/search-line.css';
import '../../css/undernave.css';
import '../../css/reset.css';
import '../../css/phonenav.css';
import '../../css/styletopnav.css';
import '../../App.css'

import {searchLoadingData} from "../../data-app/searchLoadingData";
import SearchPageLoading from "../../components/Loading/searchPageLoading";

class MainPageCards extends React.Component{
    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.loading ? <SearchPageLoading array={searchLoadingData.filter(apartment => apartment.id <= 4)}/> :
                    <div className={'container-fluid'}>
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