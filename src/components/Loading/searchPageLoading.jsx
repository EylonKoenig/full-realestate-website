import React from 'react';
import Card from "../card/Card";
import SearchNav from "../SearchNav/searchNav";
import '../../css/galleryCss/search-line.css'
import '../../css/galleryCss/undernave.css';
import '../../css/galleryCss/reset.css';
import '../../css/galleryCss/phonenav.css';
import '../../css/galleryCss/styletopnav.css';
import '../../App.css'

class SearchPageLoading extends React.Component{

    handleInputChange = () => {};
    render() {

        return (
            <div>
                {this.props.page === 'filter' &&
                <SearchNav handleInputChange={this.handleInputChange}/>}
                <div className={'container-fluid'} style={{overflow:'hidden'}}>
                    <div id={'apartment_row'} className={'row'}>
                        {this.props.array.map((item,i) => {
                            return (
                                <Card {...item} cardType={'loading'}  key = {i}/>
                            )})
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPageLoading;