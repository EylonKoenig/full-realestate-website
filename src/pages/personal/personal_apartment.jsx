import React from 'react';
import cookie from 'react-cookies'
import { withRouter } from 'react-router-dom';


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
            user: cookie.load('auth'),
        }
    };

    async componentWillMount() {
        let legnthData = {};
        if (this.state.user.role_id === 1) {
            legnthData = await api.getAllAdminApartments('?size=123456');
        } else {
            legnthData = await api.getApartmentByUserId(this.state.user.id, '?size=123456');
        }
        this.setState({ apartmentsLength: legnthData.data })
    }
    componentDidMount() {
        const query = this.props.location.search ? this.props.location.search : "";
        if (this.state.user) {
            if (this.state.user.role_id === 1) {
                this.getAdminApartments(query);

                return
            }
            this.getAprtments(this.state.user.id, query);
        }
    }
    getAprtments = async (userId, query) => {
        let data = await api.getApartmentByUserId(userId, query)
        await new Promise(resolve => { setTimeout(resolve, 2000); });
        this.setState({ allApartments: data.data, loading: false });

    }
    getAdminApartments = async (query) => {
        let data = await api.getAllAdminApartments(query)
        await new Promise(resolve => { setTimeout(resolve, 2000); });
        this.setState({ allApartments: data.data, loading: false });
    }
    handleInputChange = async (event) => {
        const { name, value } = event.target;
        if (name === 'sortby') {
            let filterArray = this.state.allApartments
            if (value === 'formExpensive') {
                filterArray = filterArray.sort((a, b) => (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0));
            } else if (value === 'formCheapest') {
                filterArray = filterArray.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0));
            }
            this.setState({ allApartments: filterArray })
        }
        if (name === 'filterBy') {
            const apartments = await api.getAllAdminApartments(`?status=${value}`);
            this.setState({ allApartments: apartments.data })
        }
    };
    handlePagination = (event) => {
        const page = event.target.id;
        this.props.history.push(`?page=${page}`)
        this.setState({ page })
        this.getAdminApartments(`?page=${page}`)
    }
    async getdata(query = "") {
        let data = await api.getApartments(query)
        await new Promise(resolve => { setTimeout(resolve, 2000); });
        this.setState({ allApartments: data.data.apartments, loading: false });
    }
    render() {
        return (
            <div>
                {this.state.loading ? <SearchPageLoading loadingApartments={searchLoadingData.slice(0, this.state.apartmentsLength)} /> :
                    <div className={'container-fluid position-relative py-3' }>
                        <SortResults resultsLength={this.state.apartmentsLength} handleInputChange={this.handleInputChange} rold_id={this.state.user.role_id} />
                        <Gallery apartments={this.state.allApartments} cardType={'personalApartment'} setData={this.getAprtments} />
                        <div className={'paginationPosition'}>
                            {/* <MyPagination allapartments={this.state.apartmentsLength}
                                handleInputChange={this.handlePagination}
                                currentPage={this.state.page}
                                displaylimit={12} /> */}
                        </div>
                    </div>}
            </div>
        )
    }
}

export default withRouter(PersonalApartments);




