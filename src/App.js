import React from 'react';
import Header from "./components/Header/header";
import Gallery from "./pages/search/gallery";
import Home from "./pages/home/home";
import CitiesGallery from "./pages/cities/citiesGallery";
import SingleApartment from "./pages/singleApartment/singleApartment";
import SearchPageLoading from "./components/Loading/searchPageLoading";
import {getDataFromServer} from "./data-app/server-action";
import {searchLoadingData} from "./data-app/searchLoadingData";
import Footer from "./components/Footer/footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apartments:[],
            cities:[],
            loading: true
        }
    }
    componentDidMount(){
        getDataFromServer('data-rt.json',this.handleSuccess);
    };
    handleSuccess = (data) => {
        this.setState({
            apartments:data.apartments,
            cities:data.cities,
        });
        setTimeout(() => {
            this.setState({loading: false});
        }, 2000)
    };

    render() {
        return (
            <Router>
                <Header/>
                    <Switch>

                        <Route path='/apartments'  component=
                            {(props) => (this.state.loading ?
                                <SearchPageLoading array={searchLoadingData} page={'filter'}/> :
                                <Gallery routerData={props.location.state.data} apartments={this.state.apartments} cities={this.state.cities}/>
                                )}/>

                        <Route path="/cities">
                            {this.state.loading ? <SearchPageLoading array={searchLoadingData} /> :
                                <CitiesGallery cities={this.state.cities}/>
                            }
                        </Route>
                            <Route path={"/singleApartment/:id"}
                                   component={(props)  => (this.state.loading ? <p>LOADING</p> : <SingleApartment apartments={this.state.apartments}
                                                                          aprId={props.match.params.id}
                                                                          cities={this.state.cities}/>)}/>
                        <Route path="/">
                            <Home apartments={this.state.apartments} cities={this.state.cities} loading={this.state.loading}/>
                        </Route>
                    </Switch>
            <Footer {...this.props}/>
            </Router>
        );
    }
}
export default App;


