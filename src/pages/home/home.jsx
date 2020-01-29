import React from 'react';

import api from '../../server-api/api'
// import MainPageCities from "./subHome/mainPageCities";
import MainPageCards from "./subHome/mainPageCards";
import LinksFooter from "../../components/Footer/linksFooter";
import UnderNavMain from "./subHome/underNavMain";
import HomeMainImage from "./subHome/homeMainImage";
import StatisticsData from "./subHome/statisticsData";
import BuyingInsidersGuide from "./subHome/buyingInsiderGuide";
import RentingInsidersGuide from "./subHome/rentingInsidersGuide";
import FamilyImagesAndForm from "./subHome/familyImagesAndForm";
import LinksNAR from "./subHome/linksNAR";
import FooterAD from "./subHome/footerAD";
import '../../css/homePageCss/homePage.css'


class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            apartments:{},
            loading:true,
        }
    }
    componentDidMount(){        
        this.getData();
    };
    async getData(){
        const data = await api.getRecentApartment();
        this.setState({apartments:data.data,loading: false});
    }

    render () {
        return(
            <div style={{overflow:'hidden'}}>
                <UnderNavMain/>
                <HomeMainImage/>
                <MainPageCards apartments={this.state.apartments} loading={this.state.loading}/>
               {/* <MainPageCities cities={this.state.apartments} loading={this.state.loading}/> */}
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




