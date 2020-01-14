import React from 'react';
import '../../css/loading/loading.css'


class UnderImage extends React.Component {
    render() {
        const apartment = this.props.item;
        return (
            <div>
                {this.props.cardType === 'loading' ?
                <div className={'underpicuercontent'}>
                    <div style={{width:'80%',margin:'auto',paddingBottom:'1px'}}>
                        <div className={'loading'} style={{width:`50%`}}>
                        </div>
                        <div className={'loading'}>
                        </div>
                    </div>
                </div>
                    :
                <div className={'underpicuercontent'}>
                    {apartment.cardType === 'apartment' &&
                    <ul className={'pictuerdetails'}>
                        <li>bed :<b>{apartment.number_of_bath}</b></li>
                        <li>bath :<b>{apartment.number_of_room}</b></li>

                    </ul>
                    }
                    <div className={'underpicuercontentLast'}>
                        Country: {apartment.country} {`  City: ${apartment.city_name}`}
                    </div>
                    {apartment.cardType === 'apartment' ? (
                        <div className={'email-agent'}>
                            {/*need to add email agent as  obj.email_agent*/}
                            <button>Email Agent</button>
                        </div>
                    ) : (<div>Description : {apartment.description} </div>)}
                </div>}
            </div>

        );
    }
}

export default UnderImage;