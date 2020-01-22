import React from 'react';
import Card from "../../../components/card/Card";

import '../../../css/galleryCss/galleryCss.css'
import {searchLoadingData} from "../../../data-app/searchLoadingData";
import SearchPageLoading from "../../../components/Loading/searchPageLoading";



class MainPageCities extends React.Component{
    render() {
        return (
            // <div className={'container-fluid my-5'}>
            //     <div className="top-image-page my-3 d-flex">
            //         <div>
            //             <h2>Recommended neighborhoods</h2>
            //             <div>
            //                 <p>Based on your previous search
            //                 </p>
            //             </div>
            //         </div>
            //     </div>
            //     <div id={'apartment_row'} className={'row'}>
            //         {this.props.loading ? <SearchPageLoading array={searchLoadingData.slice(0,4)}/> :
            //         this.props.apartments.filter(city => city.id <= 4  ).map((item,i) => {
            //             return (
            //                 <Card {...item} cardType={'city'}  key = {i}/>
            //             )})
            //         }
            //     </div>
            // </div>
            <div>
            {this.props.loading ? <SearchPageLoading loadingApartments={searchLoadingData.slice(0,4)}/> :
                <div className={'container-fluid'}>
                    <div id={'apartment_row'} className={'row'}>
                        {this.props.cities.map((item,i) => {
                            return (
                                <Card {...item} cardType={'city'}  key = {i}/>
                            )})
                        }
                    </div>
                </div>
            }
        </div>

        )
    }
}

export default MainPageCities;