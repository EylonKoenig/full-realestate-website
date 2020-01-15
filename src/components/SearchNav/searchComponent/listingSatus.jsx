import React from 'react';
class ListingStatus extends React.Component {
    render () {
        const handleInputChange = this.props.handleInputChange.bind(this);
        return(
                <div className={'listingStatusCover'}>
                    <header className="head-sub-main">
                        <h6>Listing Status</h6>
                    </header>
                    <div>
                        <div className={'check'}>For Sale</div>
                        <label className="switch">
                            <input type="checkbox" name={'for_sale'}  onChange={handleInputChange}/>
                                <span className="slider round"></span>
                        </label>
                    </div>
                    <div>
                        <div>For Rent</div>
                        <label className="switch">
                            <input type="checkbox" name={'for_rent'} onChange={handleInputChange}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
        );
    }
}

export default ListingStatus;