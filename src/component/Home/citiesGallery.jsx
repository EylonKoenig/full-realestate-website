import React from 'react';
import Card from "../../apartments/Card";
import '../../css Folder/search-line.css'
import '../../css Folder/undernave.css';
import '../../css Folder/reset.css';
import '../../css Folder/phonenav.css';
import '../../css Folder/styletopnav.css';
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