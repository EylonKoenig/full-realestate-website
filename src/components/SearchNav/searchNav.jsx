import React, {Component} from 'react';
import ProtopyType from "./searchComponent/proptyType";
import PriceSearch from "./searchComponent/priceSearch";
import BedSearch from "./searchComponent/bedsSearch";
import RoomsSearch from "./searchComponent/roomsSearch";
import TextSearch from "./searchComponent/textSearch";
import ListingStatus from "./searchComponent/listingSatus";
import '../../css/galleryCss/undernave.css'

class SearchNav extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: true};
    }
    handleShow = () =>{
        if (this.state.isOpen === true) {
            this.setState({isOpen: false})
        } else {this.setState({isOpen:true})}
    };
    render() {
        const handleInputChange = this.props.handleInputChange;
        return (
            <form>
                <div id="undernav">
                    <div className="search">
                        <TextSearch handleInputChange={handleInputChange}/>
                    </div>
                    <div className=" cover-serach-input container-fluid d-none d-lg-flex">
                        <div className="dropdown d-flex">
                            <button className="btn btn-default dropdown-toggle dropdown-button-menu" type="button" id="menu1" data-toggle="dropdown">Price</button>
                        <PriceSearch handleInputChange={handleInputChange}/>
                        </div>
                        <div className="dropdown propetyType">
                            <div>
                            <button onClick={this.state.handleShow} className="btn btn-default dropdown-toggle dropdown-button-menu" type="button" id="menu2" data-toggle="dropdown" >Propetry Type</button>
                                {this.state.isOpen && <ProtopyType handleInputChange={handleInputChange} handleShow={this.handleShow} />}
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle dropdown-button-menu" type="button" id="menu1" data-toggle="dropdown">Rooms</button>
                            <RoomsSearch handleInputChange={handleInputChange}/>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle dropdown-button-menu" type="button" id="menu1" data-toggle="dropdown">Baths
                            </button>
                            <BedSearch handleInputChange={handleInputChange}/>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle dropdown-button-menu" type="button" id="menu1" data-toggle="dropdown">Listing Satus</button>
                            <div className="dropdown-menu inside-search-button" role="menu" aria-labelledby="menu1">
                                <ListingStatus handleInputChange={handleInputChange}/>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-default dropdown-toggle dropdown-button-menu" type="button" id="menu1" data-toggle="dropdown">More Filters</button>
                            <ul className="dropdown-menu" role="menu" aria-labelledby="menpx;">
                                <li role="presentation">
                                    {/*<a role="menuitem" tabIndex="-1" href="#">*/}
                                    {/*</a>*/}
                                </li>
                            </ul>
                        </div>
                        <button type="submit" className="btn btn-outline-danger end-btn-search">Search</button>
                        <button type="reset" className="btn btn-outline-danger end-btn-search mx-2" name={'restArray'} onClick={handleInputChange}>Reset Search</button>
                    </div>
                    <div className="dropdown d-block d-lg-none">
                        <button className="btn btn-default dropdown-toggle dropdown-button-menu" type="button" id="menu1" data-toggle="dropdown">Max Price</button>
                        <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
                            <li role="presentation">
                                {/*<a role="menuitem" tabIndex="-1" href="#">*/}
                                {/*</a>*/}
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown d-block d-lg-none">
                        <button className="btn btn-default dropdown-toggle dropdown-button-menu" type="button" id="menu1"
                                data-toggle="dropdown">Filter
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchNav;