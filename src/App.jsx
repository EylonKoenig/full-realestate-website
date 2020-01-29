import React from 'react';
import { Router, Switch, Route, } from "react-router-dom";
import history from './components/history';

import Header from "./components/Header/header";
import SearchGallery from "./pages/search/SearchGallery";
import Home from "./pages/home/home";
// import CitiesGallery from "./pages/cities/citiesGallery";
import SingleApartment from "./pages/singleApartment/singleApartment";
import SearchPageLoading from "./components/Loading/searchPageLoading";
import { searchLoadingData } from "./data-app/searchLoadingData";
import Footer from "./components/Footer/footer";
import ApartmentForm from './components/Forms/apartment/apartmentForm';
import PersonalApartment from './pages/personal/personal_apartment';
import WishList from './pages/wishList/wishList';
import UserList from './pages/personal/usersList'
import EditApartment from './pages/personal/edit_apartment';
import EditUser from './pages/personal/edit_user';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
        }
    }
    render() {
        return (
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path='/apartments' component=
                        {(props) => (this.state.loading ?
                            <SearchPageLoading loadingApartments={searchLoadingData} page={'filter'} /> :
                            <SearchGallery {...props} />
                        )} />
                    <Route path="/postApartment">
                        <ApartmentForm />
                    </Route>
                    {/* <Route path="/cities">
                        {this.state.loading ? <SearchPageLoading loadingApartments={searchLoadingData} /> :
                            <CitiesGallery/>
                         }
                    </Route> */}
                    <Route path={"/apartment/:id"}
                        component={(props) => (<SingleApartment aprId={props.match.params.id} />)} />

                    <Route path={"/:id/wishlist"}
                        component={(props) => (<WishList aprId={props.match.params.id} />)} />

                    <Route path={"/users_list"}
                        component={(props) => (<UserList/>)} />

                    <Route path={"/my_apartments"}
                        component={(props) => (<PersonalApartment aprId={props.match.params.id} />)} />

                    <Route path={"/edit_apartments"} component={(props) => (<EditApartment />)} />

                    <Route path="/edit_user">
                        <EditUser />
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}
export default App;


