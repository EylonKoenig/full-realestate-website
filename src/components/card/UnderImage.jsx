import React from 'react';
import '../../css/loading/loading.css'


class UnderImage extends React.Component {
    render() {
        const item = this.props.item;
        // const obj = this.props.cardType === 'apartment' ? cities.find(o => o.id === item.cityId) : item;
        const obj = item;
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
                    {item.cardType === 'apartment' &&
                    <ul className={'pictuerdetails'}>
                        <li>bed :<b>{item.number_of_bath}</b></li>
                        <li>bath :<b>{item.number_of_room}</b></li>

                    </ul>
                    }
                    <div className={'underpicuercontentLast'}>
                        Country: {obj.country} {`  City: ${obj.city_name}`}
                    </div>
                    {item.cardType === 'apartment' ? (
                        <div className={'email-agent'}>
                            {/*need to add email agent as  obj.email_agent*/}
                            <button>Email Agent</button>
                        </div>
                    ) : (<div>Description : {obj.description} </div>)}
                </div>}
            </div>

        );
    }
}

export default UnderImage;