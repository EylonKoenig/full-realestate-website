import React from 'react';
import axios from "axios";

import SearchNav from "../../components/SearchNav/searchNav";
import Card from "../../components/card/Card";
import SortResults from "./sortResults";
import {searchLoadingData} from "../../data-app/searchLoadingData";
import '../../css/galleryCss/search-line.css';
import '../../css/galleryCss/undernave.css';
import '../../css/galleryCss/reset.css';
import '../../css/galleryCss/phonenav.css';
import '../../css/galleryCss/styletopnav.css';
import '../../css/galleryCss/filterResults.css';
import '../../App.css';
import SearchPageLoading from "../../components/Loading/searchPageLoading";

class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterList:[],
            filterObj:{for_sale:false,for_rent:false},
            allApartments: this.props.apartments,
            filterArray: this.props.apartments,
            isFilted:false,
            loading:true,
        }
    }
    setQuery(obj){
        let filters = obj;
        if((filters.for_rent && filters.for_sale )|| (!filters.for_rent && !filters.for_sale)){
                filters.sale_status = '';
        } else if (filters.for_rent){
            filters.sale_status = 'rent';
        } else {
            filters.sale_status = 'sale';
        }

        if(filters.property_type === 'any'){
            filters.property_type = "";
        }

        if(filters.maxPrice === false ){
            filters.maxPrice = '99999999999999999'
        }
        let result = '?';
        for(let prop in obj){
            result += prop + '='
            result += obj[prop] + '&' 
        }
        return result
    }
    handleInputChange = (event) => {
        const {name, value} = event.target;
        const {filterObj} = this.state;
        const obj = this.state.filterObj;
        if(name === 'for_sale' || name === 'for_rent'){
            obj[name] = !obj[name]           
    } else {
        obj[name] = value;
    }
    this.setState({filterObj:obj},() => this.getdata(this.setQuery(this.state.filterObj)));
           if (name === 'sortby'){
            let checkState = this.state.filterObj;
            checkState.sort_by = value;
            this.setState({filterObj:checkState});
            // this.filter();
        }
        if (name === 'restArray'){
            this.setState({filterObj:{for_sale:false,for_rent:false}})
            this.getdata();
        }
    };

    componentDidMount(){
        this.getdata();
        if (this.props.routerData){
            let cur = this.state.filterObj;
            cur.cityFilter = this.props.routerData;
            this.setState({filterObj: cur});
            document.getElementById('searchInput').value = this.props.routerData;
            // this.filter();
        }
    }
    async getdata(query = ""){
        const data = await axios.get(`http://localhost:5000/apartments${query}`);
        this.setState({allApartments:data.data.apartments,loading:false});
    }
    render() {
        console.log(this.state.filterObj);
        return (
            <div>
                <SearchNav handleInputChange={this.handleInputChange}/>
                {this.state.loading ? <SearchPageLoading array={searchLoadingData} /> :
                <div className={'container-fluid'}>
                    <SortResults resultsLength={this.state.allApartments.length} handleInputChange={this.handleInputChange}/>
                    <div id={'apartment_row'} className={'row'}>
                            {this.state.allApartments.map((item,i) => {
                            return (
                                <Card {...item} cardType={'apartment'}  key = {i}/>
                            )})
                        }
                    </div>
                </div>}
            </div>


        )
    }
}

export default Gallery;




