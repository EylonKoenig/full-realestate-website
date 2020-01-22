import React from 'react';
import Card from "../../components/card/Card";
import '../../css/galleryCss/search-line.css'
import '../../css/galleryCss/undernave.css';
import '../../css/galleryCss/phonenav.css';
import '../../css/galleryCss/styletopnav.css';
import '../../css/galleryCss/card.css';
import Gallery from '../../components/gallery';

class CitiesGallery extends React.Component{
    render() {
        return (
            <Gallery apartments={this.state.cities} cardType={'city'}/>
        )
    }
}

export default CitiesGallery;