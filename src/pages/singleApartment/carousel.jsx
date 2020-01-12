import React from 'react';
import '../../css/apratmentCss/apratment.css'

class Carousel extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {apartment} = this.props;
        let carouselItems = [];

        carouselItems.push(apartment.images.map((item,i) =>  {
            return (
                <div className='carousel-item'>
                    <img src={`${apartment.images[i]}`} className="d-block w-100" alt="..."/>
                </div>
            )
        }));

        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={`${apartment.main_image}`}
                             alt=""/>
                    </div>
                    {carouselItems}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>




        )
    }
}
export default Carousel;
