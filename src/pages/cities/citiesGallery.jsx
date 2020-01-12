import React from 'react';
import Card from "../card/Card";
import '../../css/search-line.css'
import '../../css/undernave.css';
import '../../css/reset.css';
import '../../css/phonenav.css';
import '../../css/styletopnav.css';
import '../../App.css'

class CitiesGallery extends React.Component{
    render() {
        return (
            <div className={'container-fluid'}>
                <div id={'apartment_row'} className={'row'}>
                    {this.props.cities.map((item,i) => {
                    return (
                        <Card {...item} cardType={'city'}  key = {i}/>
                        )})
                    };
                </div>
            </div>
        )
    }
}

export default CitiesGallery;