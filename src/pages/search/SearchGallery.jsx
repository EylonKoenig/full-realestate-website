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
            filters.sale_status = '';
        } else if (filters.for_rent) {
            filters.sale_status = 'rent';
        } else {
            filters.sale_status = 'sale';
        }

        if (filters.property_type === 'any') {
            filters.property_type = "";
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
        if (name === 'for_sale' || name === 'for_rent') {
            obj[name] = !obj[name]
        } else {
            obj[name] = value;
        }
        this.setState({ filterObj: obj }, () => {
            this.getdata(this.setQuery(this.state.filterObj));
            this.props.history.push(this.setQuery(this.state.filterObj))
        });

        if (name === 'sortby') {
            let checkState = this.state.filterObj;
            checkState.sort_by = value;
            this.setState({ filterObj: checkState });
            // this.filter();
        }
        if (name === 'restArray') {
            this.setState({ filterObj: { for_sale: false, for_rent: false } })
            this.getdata();
        }
    };

    componentDidMount() {
        const query = this.props.location.search ? this.props.location.search : "";
        this.getdata(query);
        // if (this.props.routerData) {
        // let cur = this.state.filterObj;
        // cur.cityFilter = this.props.routerData;
        // this.setState({ filterObj: cur });
        // document.getElementById('searchInput').value = this.props.routerData;
        // this.filter();
        // }
    }
    async getdata(query = "") {
        let data = await api.getApartments(query)
        this.setState({ allApartments: data.data.apartments, loading: false });
    }
    render() {
        return (
            <div>
                <SearchNav handleInputChange={this.handleInputChange} filters={this.state.filterObj} />
                {this.state.loading ? <SearchPageLoading loadingApartments={searchLoadingData} /> :
                    <div className={'container-fluid'}>
                        <SortResults resultsLength={this.state.allApartments.length} handleInputChange={this.handleInputChange} />
                        <Gallery apartments={this.state.allApartments} cardType={'apartment'}/>
                    </div>}
            </div>
        )
    }
}

export default SearchGallery;




