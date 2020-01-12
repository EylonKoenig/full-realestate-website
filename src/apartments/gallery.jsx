import React from 'react';
import SearchNav from "../component/Search/searchNav";
import {cities} from "./data-app/cities";
import Card from "./Card";
import '../css Folder/search-line.css';
import '../css Folder/undernave.css';
import '../css Folder/reset.css';
import '../css Folder/phonenav.css';
import '../css Folder/styletopnav.css';
import '../App.css'
import '../css Folder/filterResults.css'
import {getDataFromServer} from "../component/server-action";
import SortResults from "./sortResults";
import axios from "axios";
class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            filterList:[],
            filterObj:{cityFilter:false,minPrice:false,maxPrice:false,minBeds:false,maxBeds:false,minRooms:false,maxRooms:false,bedroomfilter:false,roomfilter:false,for_sell:false,for_rent:false,sort_by:false},
            allApartments: this.props.apartments,
            filterArray: this.props.apartments,
            isFilted:false,
        }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        const {filterObj} = this.state;
        // if (name === 'propetyCheckBox') {
        //     if (value === 'any') {
        //         this.setState({filterList: []})
        //     } else if (this.state.filterList.includes(value)) {
        //         let curArray = this.state.filterList;
        //         let index = curArray.indexOf(value);
        //         curArray.splice(index, 1);
        //         this.setState({filterList: curArray});
        //     } else {
        //         this.setState({filterList: [...this.state.filterList, value]})
        //     }
        // }
        this.setState({
            [name]: value
        });
        if (name === 'city') {
            let cur = this.state.filterObj;
            if (value !== "") {
                cur.cityFilter = value;
                this.setState({filterObj: cur})
            } else {
                cur.cityFilter = false;
                this.setState({cityFilter: cur})
            }
            this.filter()
        }
        if (name === 'minPrice'){
            let cur = this.state.filterObj;
            if (value !== "") {
                cur.minPrice = value;
                this.setState({filterObj: cur});
            }else {
                cur.minPrice = false;
                this.setState({filterObj})
            }
            this.filter()
        }
        if (name === 'maxPrice'){
            let cur = this.state.filterObj;
            if (value !== "") {
                cur.maxPrice = value;
                this.setState({filterObj: cur});
            }else {
                cur.maxPrice = false;
                this.setState({filterObj})
            }
            this.filter()
        }
        if (name === 'minBeds'){
            let cur = this.state.filterObj;
            if (value !== 0) {
                cur.minBeds = value;
                this.setState({filterObj: cur});
            }else {
                cur.minBeds = false;
                this.setState({filterObj})
            }
            this.filter()
        }
        if (name === 'maxBeds'){
            let cur = this.state.filterObj;
            if (value !== Infinity) {
                cur.maxBeds = value;
                this.setState({filterObj: cur});
            }else {
                cur.maxBeds = false;
                this.setState({filterObj})
            }
            this.filter()
        }
        if (name === 'minRooms'){
            let cur = this.state.filterObj;
            if (value !== 0) {
                cur.minRooms = value;
                this.setState({filterObj: cur});
            }else {
                cur.minRooms = false;
                this.setState({filterObj})
            }
            this.filter()
        }
        if (name === 'maxRooms'){
            let cur = this.state.filterObj;
            if (value !== Infinity) {
                cur.maxRooms = value;
                this.setState({filterObj: cur});
            }else {
                cur.maxRooms = false;
                this.setState({filterObj})
            }
            this.filter()
        }
        if (name === 'bedroomfilter'){
            let cur = this.state.filterObj;
            if (value !== 0) {
                cur.bedroomfilter = value;
                this.setState({filterObj: cur});
            }else {
                cur.bedroomfilter = false;
                this.setState({filterObj})
            }
            this.filter()
        }
        if (name === 'roomfilter'){
            let cur = this.state.filterObj;
            if (value !== 0) {
                cur.roomfilter = value;
                this.setState({filterObj: cur});
            }else {
                cur.roomfilter = false;
                this.setState({filterObj})
            }
            this.filter();
        }
        if (name === 'for_sell'){
            let checkState = this.state.filterObj;
            checkState.for_sell = !checkState.for_sell;
            this.setState({filterObj:checkState});
            this.filter();
        }
        if (name === 'for_rent'){
            let checkState = this.state.filterObj;
            checkState.for_rent = !checkState.for_rent;
            this.setState({filterObj:checkState});
            this.filter();
        }
        if (name === 'sortby'){
            let checkState = this.state.filterObj;
            checkState.sort_by = value;
            this.setState({filterObj:checkState});
            this.filter();
        }
        if (name === 'restArray'){
            for (const property in filterObj){
                filterObj[property] = false;
            }
            this.setState({isFilted:false})
        }
    };
    filter(){
        const {allApartments, filterObj} = this.state;
        let filterArray = allApartments;
        for (let i=0;i<allApartments.length;i++){
            for (const property in filterObj){
                if (filterObj[property]){
                    if (property === 'cityFilter'){
                        filterArray = filterArray.filter(apartment => this.checkText(apartment,filterObj.cityFilter));
                    }
                    if (property === 'minPrice'){
                        filterArray = filterArray.filter(apartment => this.checkMinRange(apartment,filterObj.minPrice,'price'));
                    }
                    if (property === 'maxPrice'){
                        filterArray = filterArray.filter(apartment => this.checkMaxRange(apartment,filterObj.maxPrice,'price'));
                    }
                    if (property === 'minBeds'){
                        filterArray = filterArray.filter(apartment => this.checkMinRange(apartment,filterObj.minBeds,'number_of_beds'));
                    }
                    if (property === 'maxBeds'){
                        filterArray = filterArray.filter(apartment => this.checkMaxRange(apartment,filterObj.maxBeds,'number_of_beds'));
                    }
                    if (property === 'roomfilter'){
                        filterArray = filterArray.filter(apartment => this.checkMinRange(apartment,filterObj.roomfilter,'number_of_rooms'));
                    }
                    if (property === 'bedroomfilter'){
                        filterArray = filterArray.filter(apartment => this.checkMinRange(apartment,filterObj.bedroomfilter,'number_of_beds'));
                    }
                    if (property === 'minRooms'){
                        filterArray = filterArray.filter(apartment => this.checkMinRange(apartment,filterObj.minBeds,'number_of_rooms'));
                    }
                    if (property === 'maxRooms'){
                        filterArray = filterArray.filter(apartment => this.checkMaxRange(apartment,filterObj.maxRooms,'number_of_rooms'));
                    }
                    if (property === 'for_sell'){
                        filterArray = filterArray.filter(apartment => apartment.for_sale);
                    }
                    if (property === 'for_rent'){
                        filterArray = filterArray.filter(apartment => apartment.for_sale);
                    }
                }
            }
        }
        if (this.state.filterObj.sort_by){
            if (this.state.filterObj.sort_by === 'formExpensive'){
                filterArray = filterArray.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
            } else if (this.state.filterObj.sort_by === 'formCheapest'){
                filterArray = filterArray.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            }
        }
        this.checkIfFilted();
        this.setState({filterList:filterArray})
    };
    checkIfFilted =() => {
        const filters = this.state.filterObj;
        for (const property in filters){
            if (filters[property]){
                this.setState({isFilted:true});
                break;
            } else {
                this.setState({isFilted:false})
            }
        }
    };
    checkText(apartment,value){
        let curCity = this.getCitiesDataById(apartment.cityId);
        return curCity.label.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            curCity.country.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
            (curCity.country.toLowerCase()+" "+curCity.label.toLowerCase()).indexOf(value.toLowerCase()) !== -1 ;
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/apartments`)
            .then(res => {
                this.setState({filterArray:res.data,allApartments:res.data});
            });
        if (this.props.routerData){
            let cur = this.state.filterObj;
            cur.cityFilter = this.props.routerData;
            this.setState({filterObj: cur});
            document.getElementById('searchInput').value = this.props.routerData;
            this.filter();
        }
    }

    getCitiesDataById = (id) => {
        return cities.find(city => city.id === parseInt(id))
    };
    checkMinRange(value,min,type) {
        let curVal = value[type];
        if (type === 'price'){
            curVal = value[type]*100000
        }
        min = (min === undefined || isNaN(min) || min === '') ? 0  : min;
        return (curVal >= min);
    }
    checkMaxRange(value,max,type) {
        let curVal = value[type];
        if (type === 'price'){
            curVal = value[type]*100000
        }
        max = (max === undefined || isNaN(max) || max === '') ? Infinity  : max;
        return (curVal <= max);
    }


    render() {
        let resultsArray = this.state.isFilted ? this.state.filterList : this.state.allApartments;
        return (
            <div>
                <SearchNav handleInputChange={this.handleInputChange}/>
                <div className={'container-fluid'}>
                    <SortResults resultsLength={resultsArray.length} handleInputChange={this.handleInputChange}/>
                    <div id={'apartment_row'} className={'row'}>
                        {resultsArray.map((item,i) => {
                            return (
                                <Card {...item} cardType={'apartment'}  key = {i}/>
                            )})
                        }
                    </div>
                </div>
            </div>


        )
    }
}

export default Gallery;




