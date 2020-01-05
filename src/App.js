import React from 'react';
import Header from "./component/Header/header";
import Gallery from "./apartments/gallery";
import Home from "./component/Home/home";
import CitiesGallery from "./component/Home/citiesGallery";
import SingelApartment from "./apartments/singelApartment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {getDataFromServer} from "./component/server-action";
import Footer from "./component/Footer/footer";
import SearchPageLoading from "./component/Loading/searchPageLoading";
import {searchLoadingData} from "./apartments/data-app/searchLoadingData";

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
                                   component={(props)  => (this.state.loading ? <p>LOADING</p> : <SingelApartment apartments={this.state.apartments}
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


