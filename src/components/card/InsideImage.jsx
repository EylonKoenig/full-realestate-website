import React from 'react';

class InsideImage extends React.Component {

    render() {
        function numberWithCommas(x) {
            x = Math.round(x);
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        var status = undefined;
        const item = this.props.item;
        if(item.sale_status === 'both'){
            status = ' sale or rent'
        } else if (item.sale_status === 'sale'){
            status = ' sale'
        } else {
            status = ' rent'
        }
        //enum('sale','rent','both')  sale_status
        return (
            <div id={'contentImg'} className={'inimagecontent'}>
                <span className={'topleftimg green-background'}>{item.description}</span>
                <span className="buttonleftimg">
							<p className="text-left">{status && `house for ${status}`}</p>
                            {`$${numberWithCommas((item.price))}`}
                </span>
                <span className={'heart'}>
                    <svg id="svgHeart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="25" height="30">
                        <path fill="rgba(0,0,0,0.4)" stroke="#fff" strokeWidth="3" d="M20 8.3c4.9-8 18.5-5.9 18.5 5l-.1 1.9c-.8 4.6-4 9.3-8.9 14a66.6 66.6 0 0 1-8.7 7l-.7.6-.8-.5a27.6 27.6 0 0 1-2.8-1.7c-2-1.4-4-3-6-4.7-5.6-5-9-10.3-9-15.8A10 10 0 0 1 20 8.3z"></path>
                    </svg>
                </span>
            </div>
        )
    }
}

export default InsideImage;
