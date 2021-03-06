import React from 'react';

import Card from "../components/card/Card";


class Gallery extends React.Component {
    render() {
        return (
            <div className={'container-fluid'} style={{ overflow: 'hidden', paddingBottom:'30px'}}>
                <div id={'apartment_row'} className={'row'}>
                    {this.props.apartments.map((item, i) => {
                        return (
                            <Card {...item} cardType={this.props.cardType} key={i} setData={this.props.setData}/>
                        )
                    })}
                </div>
            </div>

        )
    }
}

export default Gallery;
