import React from 'react';
import {cities} from "./data-app/cities";
import '../css Folder/loading/loading.css'

class UnderImage extends React.Component {
    render() {
        console.log(this.props.item);
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
                        <li>bedsroom :<b>{item.number_of_beds}</b></li>
                        <li>bathsroom :<b>{item.number_of_rooms}</b></li>

                    </ul>
                    }
                    <div className={'underpicuercontentLast'}>
                        Country: {obj.country} {`  City: ${obj.label}`}
                    </div>
                    {item.cardType === 'apartment' ? (
                        <div className={'email-agent'}>
                            <button>Email Agent</button>
                        </div>
                    ) : (<div>Description : {obj.description} </div>)}
                </div>}
            </div>

        );
    }
}

export default UnderImage;