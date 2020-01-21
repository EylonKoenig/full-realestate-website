import React from 'react';

import Header from "./components/Header/header";
import Gallery from "./pages/search/gallery";
import Home from "./pages/home/home";
import CitiesGallery from "./pages/cities/citiesGallery";
import SingleApartment from "./pages/singleApartment/singleApartment";
import SearchPageLoading from "./components/Loading/searchPageLoading";
import { searchLoadingData } from "./data-app/searchLoadingData";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ApartmentForm from './components/Forms/apartment/apartmentForm';



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
                <Header/>
                <Switch>
                    <Route path='/apartments' component=
                        {(props) => (this.state.loading ?
                            <SearchPageLoading array={searchLoadingData} page={'filter'} /> :
                            <Gallery {...props} />
                        )} />
                    <Route path="/postApartment">
                            <ApartmentForm/>
                    </Route>
                    <Route path="/cities">
                        {this.state.loading ? <SearchPageLoading array={searchLoadingData} /> :
                            <CitiesGallery cities={this.state.cities} />
                        }
                    </Route>
                    <Route path={"/singleApartment/:id"}
                        component={(props) => (<SingleApartment apartments={this.state.apartments}
                            aprId={props.match.params.id}
                            cities={this.state.cities} />)} />
                    <Route path="/">
                        <Home cities={this.state.cities} />
                    </Route>
                </Switch>
                {/* <Footer /> */}
            </Router>
        );
    }
}
export default App;


