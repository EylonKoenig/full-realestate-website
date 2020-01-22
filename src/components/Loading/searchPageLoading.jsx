import React from 'react';

import '../../css/galleryCss/galleryCss.css'
import SearchNav from "../SearchNav/searchNav";
import Gallery from '../gallery';

class SearchPageLoading extends React.Component {

    handleInputChange = () => { };
    render() {
        return (
            <div>
                {this.props.page === 'filter' &&
                    <SearchNav handleInputChange={this.handleInputChange} />}
                    <Gallery apartments={this.props.loadingApartments} cardType={'loading'} />
            </div>
        )
    }
}

export default SearchPageLoading;