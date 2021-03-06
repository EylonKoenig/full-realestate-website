import React from 'react';
import '../../css/loading/loading.css'


class UnderImage extends React.Component {
    alertEmail =(e)=>{
        e.stopPropagation();
        e.preventDefault();
        alert(`the email is ${this.props.item.email}`)
    }
    render() {
        const apartment = this.props.item;
        return (
            <div>
                {this.props.cardType === 'loading' ?
                    <div className={'underpicuercontent'}>
                        <div style={{ width: '80%', margin: 'auto', paddingBottom: '1px' }}>
                            <div className={'loading'} style={{ width: `50%` }}>
                            </div>
                            <div className={'loading'}>
                            </div>
                        </div>
                    </div>
                    : this.props.cardType === 'apartment' &&
                    <div className={'underpicuercontent'}>
                        <ul className={'pictuerdetails'}>
                            <li>room :<b>{apartment.number_of_room}</b></li>
                            <li>bath :<b>{apartment.number_of_bath}</b></li>
                            <li>sqft :<b>{apartment.sqft}</b></li>
                        </ul>

                        <div className={'underpicuercontentLast'}>
                            Country: {apartment.country} {`  City: ${apartment.city_name}`}
                        </div>
                        <div className={'email-agent'}>
                            {/*need to add email agent action as  obj.email_agent*/}
                            <button onClick={this.alertEmail}>Email Agent</button>
                        </div>
                    </div>
                }
            </div>

        );
    }
}

export default UnderImage;