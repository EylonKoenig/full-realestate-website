import React from 'react';
import Card from "../../components/card/Card";
import '../../css/galleryCss/search-line.css'
import '../../css/galleryCss/undernave.css';
import '../../css/galleryCss/reset.css';
import '../../css/galleryCss/phonenav.css';
import '../../css/galleryCss/styletopnav.css';
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