import React from 'react';
import MainPageCities from "./mainPageCities";
import MainPageCards from "./mainPageCards";
import LinksFooter from "../../components/Footer/linksFooter";
import UnderNavMain from "./underNavMain";
import HomeMainImage from "./homeMainImage";
import StatisticsData from "./statisticsData";
import BuyingInsidersGuide from "./buyingInsiderGuide";
import RentingInsidersGuide from "./rentingInsidersGuide";
import FamilyImagesAndForm from "./familyImagesAndForm";
import LinksNAR from "./linksNAR";
import FooterAD from "./footerAD";
import '../../css/homePageCss/homePage.css'

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <div style={{overflow:'hidden'}}>
                <UnderNavMain/>
                <HomeMainImage/>
                <MainPageCards apartments={this.props.apartments} loading={this.props.loading}/>
                {/*<MainPageCities cities={this.props.cities} loading={this.props.loading}/>*/}
                <StatisticsData/>
                <BuyingInsidersGuide/>
                <RentingInsidersGuide/>
                <FamilyImagesAndForm/>
                <div className={'footer-wrapper'}>
                    <LinksNAR/>
                    <LinksFooter/>
                    <FooterAD/>
                </div>
            </div>
        );
    }}
export default Home;




