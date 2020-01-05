import React from 'react';
import Card from "./Card";
import '../css Folder/search-line.css';
import '../css Folder/undernave.css';
import '../css Folder/reset.css';
import '../css Folder/phonenav.css';
import '../css Folder/styletopnav.css';
import '../App.css'
import SearchPageLoading from "../component/Loading/searchPageLoading";
import {searchLoadingData} from "./data-app/searchLoadingData";

class MainPageCards extends React.Component{
    render() {
        return (
            <div>
                {this.props.loading ? <SearchPageLoading array={searchLoadingData.filter(apartment => apartment.id <= 4)}/> :
                    <div className={'container-fluid'}>
                        <div id={'apartment_row'} className={'row'}>
                            {this.props.apartments.filter(apartment => apartment.id <= 4).map((item,i) => {
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