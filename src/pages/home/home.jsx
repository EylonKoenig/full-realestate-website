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
import axios from "axios";

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
        await axios.get(`http://localhost:5000/apartments/four/bydate`)
            .then(res => {
                this.setState({apartments:res.data,loading: false});
            });
    }

    render () {
        return(
            <div style={{overflow:'hidden'}}>
                <UnderNavMain/>
                <HomeMainImage/>
                <MainPageCards apartments={this.state.apartments} loading={this.state.loading}/>
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




