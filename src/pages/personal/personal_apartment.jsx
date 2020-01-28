import React from 'react';
import cookie from 'react-cookies'

import SortResults from '../search/sortResults';
import { searchLoadingData } from "../../data-app/searchLoadingData";
import '../../css/galleryCss/filterResults.css';
import '../../css/galleryCss/galleryCss.css'
import SearchPageLoading from "../../components/Loading/searchPageLoading";
import Gallery from '../../components/gallery';
import api from '../../server-api/api';
import MyPagination from '../../components/paginatino/pagaination';


class PersonalApartments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allApartments: [],
            loading: true,
            user: cookie.load('auth')
        }
    };

    onChangePage =(pageOfItems)=> {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidMount() {
        if (this.state.user) {
            if (this.state.user.role_id === 1) {
                this.getAdminApartments();
                
                return
            }
            this.getAprtments(this.state.user.id);
        }

    }
    getAprtments = async userId => {
        let data = await api.getApartmentByUserId(userId)
        // await new Promise(resolve => { setTimeout(resolve, 100000); });
        this.setState({ allApartments: data.data, loading: false });
        
    }
    getAdminApartments = async userId => {
        let data = await api.getAllAdminApartments(userId)
        // await new Promise(resolve => { setTimeout(resolve, 5000); });
        this.setState({ allApartments: data.data, loading: false });
    }
     handleInputChange = async (event) => {
        const { name, value } = event.target;
        if (name === 'sortby') {
            let filterArray = this.state.allApartments
            if (value === 'formExpensive'){
                filterArray = filterArray.sort((a,b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
            } else if (value === 'formCheapest'){
                filterArray = filterArray.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            }
            this.setState({allApartments:filterArray})
        }
        if (name === 'filterBy') {
            const apartments = await api.getAllAdminApartments(`?status=${value}`);
            this.setState({allApartments:apartments.data})
        }
    };
    render() {
        return (
            <div>
                {this.state.loading ? <SearchPageLoading loadingApartments={searchLoadingData} /> :
                    <div className={'container-fluid'} style={{ height: '100vh' }}>
                        <SortResults resultsLength={this.state.allApartments.length} handleInputChange={this.handleInputChange} type={'admin'}/>
                        <Gallery apartments={this.state.allApartments} cardType={'personalApartment'} setData={this.getAprtments} />
                        <MyPagination allapartments={this.state.allApartments.length}  displaylimit={12}/>
                    </div>}
            </div>
        )
    }
}

export default PersonalApartments;




