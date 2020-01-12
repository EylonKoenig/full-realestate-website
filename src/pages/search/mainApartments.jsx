import React, {Component} from 'react';
import Header from "../../components/Header/header";
import Gallery from "./gallery";


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