import React from 'react';
import InsideImage from "./InsideImage";
import UnderImage from "./UnderImage";
import {Link} from 'react-router-dom';
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: null,
        }
    }
    render() {
        let insideImg = null;
        let underImg = null;
        let srcImg =null;
        if (this.props.cardType === 'city'){
             insideImg = null;
             underImg = <UnderImage item={this.props} cardType={'city'}/>;
             srcImg = `/images/cities/${this.props.image}`;
        }
        else if (this.props.cardType === 'apartment'){
             insideImg = <InsideImage item={this.props} cardType={'apartment'}/>;
             underImg = <UnderImage item={this.props} cardType={'apartment'}/>;
             srcImg = `/images/apartment/${this.props.main_image}`
        }
        else if (this.props.cardType === 'loading'){
             insideImg = null;
             underImg = <UnderImage item={this.props} cardType={'loading'}/>;
             srcImg = this.props.main_image
        }
        return (
            <div className={"cell col-12 col-sm-6 col-md-4 col-lg-3"}>
                <div className={'text-above-picter'} id={"picter"}>{this.props.title}</div>
                <div className={"card-cover"}>
                    <Link to={this.props.cardType === 'apartment' ?
                                `/singleApartment/${this.props.id}` : {pathname:'/apartments',state:{test:this.props.country+" "+this.props.label}}}
                                className={'pictuerhref'}>
                        <div className={'image-cover'} index={'0'}
                             onMouseLeave={() => this.setState({hover:false})}
                             onMouseOver={() => this.setState({hover:true})}>
                                <img className={'images-center'} id={'image-bottom'} src={srcImg} alt={''}/>
                            {this.props.cardType === 'apartment' &&
                                <img className={'images-center'} id={'image-top'} src={`/images/apartment/${this.props.images[0]}`} alt={''} style={{position: 'absolute',left:0}}/>}
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


