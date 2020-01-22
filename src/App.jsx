import React from 'react';

import './css/galleryCss/reset.css'
import Header from "./components/Header/header";
import SearchGallery from "./pages/search/SearchGallery";
import Home from "./pages/home/home";
import CitiesGallery from "./pages/cities/citiesGallery";
import SingleApartment from "./pages/singleApartment/singleApartment";
import SearchPageLoading from "./components/Loading/searchPageLoading";
import { searchLoadingData } from "./data-app/searchLoadingData";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ApartmentForm from './components/Forms/apartment/apartmentForm';
import WishList from './pages/wishList/wishList';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
        }
    }
    render() {
        return (
            <Router>
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
                           component={(props) => (<SingleApartment aprId={props.match.params.id}/>)}/>

<Route path={"/:id/wishlist"}
                           component={(props) => (<WishList aprId={props.match.params.id}/>)}/>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </Router>
        );
    }
}
export default App;


