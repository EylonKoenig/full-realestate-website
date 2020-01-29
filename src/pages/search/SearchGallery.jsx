import React from 'react';

import SearchNav from "../../components/SearchNav/searchNav";
import SortResults from "./sortResults";
import { searchLoadingData } from "../../data-app/searchLoadingData";
import '../../css/galleryCss/filterResults.css';
import '../../css/galleryCss/galleryCss.css'
import SearchPageLoading from "../../components/Loading/searchPageLoading";
import api from '../../server-api/api';
import Gallery from '../../components/gallery';

class SearchGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterObj: { for_sale: false, for_rent: false },
            allApartments: this.props.apartments,
            isFilted: false,
            loading: true,
        }

    }
    setQuery(obj) {
        let filters = obj;
        if ((filters.for_rent && filters.for_sale) || (!filters.for_rent && !filters.for_sale)) {
            delete filters.sale_status;
            delete filters.for_sale;
            delete filters.for_rent;
            // filters.sale_status = '';
        } else if (filters.for_rent) {
            filters.sale_status = 'rent';
        } else {
            filters.sale_status = 'sale';
        }

        if (filters.property_type === 'any') {
            delete filters.property_type
            // filters.property_type = "";
        }

        if (filters.maxPrice === false) {
            filters.maxPrice = '99999999999999999'
        }
        let result = '?';
        for (let prop in obj) {
            result += prop + '='
            result += obj[prop] + '&'
        }
        return result
    }
    handleInputChange = (event) => {
        const { name, value } = event.target;
        const obj = this.state.filterObj;
        if (name === 'sortby') {
            let filterArray = this.state.allApartments
            if (value === 'formExpensive'){
                filterArray = filterArray.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
            } else if (value === 'formCheapest'){
                filterArray = filterArray.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            }
            this.setState({allApartments:filterArray})
            return
        }
        if (name === 'for_sale' || name === 'for_rent') {
            obj[name] = !obj[name]
        } else {
            obj[name] = value;
        }
        this.setState({ filterObj: obj }, () => {
            this.getdata(this.setQuery(this.state.filterObj));
            this.props.history.push(this.setQuery(this.state.filterObj))
        });
        if (name === 'restArray') {

            this.setState({ filterObj: { for_sale: false, for_rent: false } })
            this.getdata();
        }
    };
    componentDidMount() {
        const query = this.props.location.search ? this.props.location.search : "";
        this.getdata(query);

    }
    async getdata(query = "") {
        let data = await api.getApartments(query);
        await new Promise(resolve => { setTimeout(resolve, 3500); });
        this.setState({ allApartments: data.data.apartments, loading: false });
    }
    render() {
        return (
            <div>
                <SearchNav handleInputChange={this.handleInputChange} filters={this.state.filterObj} />
                
                {this.state.loading ? <SearchPageLoading loadingApartments={searchLoadingData} /> :
                    <div className={'container-fluid'} style={{height:'100vh'}}>
                        <SortResults resultsLength={this.state.allApartments.length} handleInputChange={this.handleInputChange}/>
                        <Gallery apartments={this.state.allApartments} cardType={'apartment'}/>
                    </div>}
            </div>
        )
    }
}

export default SearchGallery;




