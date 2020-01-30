import React from 'react';
import {Link} from 'react-router-dom';

import InsideImage from "./InsideImage";
import UnderImage from "./UnderImage";
import InsideEditImage from './InsideEditCard'

class Card extends React.Component {
    render() {
        let images = "http://localhost:5000/images/general/loadingApartment.jpg"
        let insideImg , underImg , srcImg = null;
        if (this.props.cardType === 'personalApartment'){
            insideImg = <InsideEditImage apartment={this.props} setData={this.props.setData}/> ;
            underImg = <UnderImage item={this.props} cardType={'apartment'}/>;
            srcImg = `http://localhost:5000/${this.props.main_image}`;
        }
        else if (this.props.cardType === 'apartment'){
             insideImg = <InsideImage item={this.props} cardType={'apartment'}/>;
             underImg = <UnderImage item={this.props} cardType={'apartment'}/>;
             srcImg = `http://localhost:5000/${this.props.main_image}`
        }
        else if (this.props.cardType === 'loading'){
            insideImg = null;
             underImg = <UnderImage item={this.props} cardType={'loading'}/>;
             srcImg = this.props.main_image
        }
        if(this.props.images){
         images = this.props.images.toString().split(',')
            .map(image => "http://localhost:5000/"+image);
        }
        return (
            <div className={"cell col-12 col-sm-6 col-md-4 col-lg-3"}>
                <div className={'text-above-picter'} id={"picter"}>{this.props.title}</div>
                <div className={"card-cover"}>
                    <Link to={`/apartment/${this.props.id}` }
                                className={'pictuerhref'}>
                        <div className={'image-cover'} index={'0'}>
                                <img className={'images-center'} id={'image-bottom'} src={srcImg} alt={''}/>
                            {/* {this.props.cardType === 'apartment' && */}
                                {/* // <img className={'images-center'} id={'image-top'} src={`${images[0]}`} alt={''} style={{position: 'absolute',left:0}}/>} */}
                            {insideImg}
                        </div>
                        {underImg}
                    </Link>
                </div>
            </div>
        )
    }
}
export default Card;


