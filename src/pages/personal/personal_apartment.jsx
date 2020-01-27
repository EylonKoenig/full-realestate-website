import React from 'react';
import cookie from 'react-cookies'
import {Pagination} from 'react-bootstrap'

import SortResults from '../search/sortResults';
import { searchLoadingData } from "../../data-app/searchLoadingData";
import '../../css/galleryCss/filterResults.css';
import '../../css/galleryCss/galleryCss.css'
import SearchPageLoading from "../../components/Loading/searchPageLoading";
import Gallery from '../../components/gallery';
import api from '../../server-api/api';


class PersonalApartments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allApartments: [],
            loading: true,
            pageOfItems: [],
            user: cookie.load('auth')
        }
        this.onChangePage = this.onChangePage.bind(this);
    };

    onChangePage(pageOfItems) {
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
        this.setState({ allApartments: data.data, loading: false });
        await new Promise(resolve => { setTimeout(resolve, 100000); });
        
    }
    getAdminApartments = async userId => {
        let data = await api.getAllAdminApartments(userId)
        await new Promise(resolve => { setTimeout(resolve, 5000); });
        this.setState({ allApartments: data.data, loading: false });
    }
    render() {
        return (
            <div>
                {this.state.loading ? <SearchPageLoading loadingApartments={searchLoadingData} /> :
                    <div className={'container-fluid'} style={{ height: '100vh' }}>
                        <SortResults resultsLength={this.state.allApartments.length} handleInputChange={this.handleInputChange} />
                        <Gallery apartments={this.state.allApartments} cardType={'personalApartment'} setData={this.getAprtments} />
                        {this.state.pageOfItems.map(item =>
                            <div key={item.id}>{item.name}</div>
                        )}
                    </div>}
            </div>
        )
    }
}

export default PersonalApartments;




