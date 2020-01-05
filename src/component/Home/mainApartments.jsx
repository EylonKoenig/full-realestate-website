import React, {Component} from 'react';
import Header from "../Header/header";
import Gallery from "../../apartments/gallery";
class MainApartments extends React.Component {
    render () {
        return(
            <div>
                <Header/>
                <Gallery/>
            </div>
        );
    }
}
// previous app
export default MainApartments;