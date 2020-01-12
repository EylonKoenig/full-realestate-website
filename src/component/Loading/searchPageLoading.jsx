import React from 'react';
import Card from "../../apartments/Card";
import SearchNav from "../Search/searchNav";
import '../../css Folder/search-line.css'
import '../../css Folder/undernave.css';
import '../../css Folder/reset.css';
import '../../css Folder/phonenav.css';
import '../../css Folder/styletopnav.css';
import '../../App.css'
class SearchPageLoading extends React.Component{

    handleInputChange = () => {};
    render() {
        console.log(this.props);
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