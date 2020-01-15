import React from 'react';

class BedSearch extends React.Component{
    render() {
        return (
            <div className="inside-beds-search dropdown-menu" role="menu" aria-labelledby="menu1">
                {/*<div className="dropdown-menu" style={{display:'none'}}></div>*/}
                <div className="head-sub-main">
                    <h6>Baths range</h6>
                </div>
                <div className="filter-btn-group">
                    <input id="bed-any-desktop"
                           className={'chkBeds'}
                           name="minBath"
                           type="radio"
                           value="0"
                           // checked={"checked"}
                           onChange={this.props.handleInputChange}/>
                    <label htmlFor="bed-any-desktop" className="filter-btn-group-text-sm" style={{padding:'8px'}}>Any</label>

                    <input id="bed-1-desktop" className={'chkBeds'} name="minBath" type="radio" value="1" onChange={this.props.handleInputChange}/>
                    <label htmlFor="bed-1-desktop">1+</label>

                    <input id="bed-2-desktop" className={'chkBeds'} name="minBath" type="radio" value="2" onChange={this.props.handleInputChange}/>
                    <label htmlFor="bed-2-desktop">2+</label>

                    <input id="bed-3-desktop" className={'chkBeds'} name="minBath" type="radio" value="3" onChange={this.props.handleInputChange}/>
                    <label htmlFor="bed-3-desktop">3+</label>

                    <input id="bed-4-desktop" className={'chkBeds'} name="minBath" type="radio" value="4" onChange={this.props.handleInputChange}/>
                    <label htmlFor="bed-4-desktop">4+</label>

                    <input id="bed-5-desktop" className={'chkBeds'} name="minBath" type="radio" value="5" onChange={this.props.handleInputChange}/>
                    <label htmlFor="bed-5-desktop">5+</label>

                    <div className="bed-filter-divider text-center margin-top margin-bottom">
                        Or Select Bedrooms Range
                    </div>
                    <div className="row filter-range-input justify-content-around">
                        <div className="col-5">
                            <div  list={'minBath'} className="filter-select-wrapper">
                            <input list={'minBath'} type={'text'} name={'minBath'} className="form-control" placeholder={'FROM'}  onChange={this.props.handleInputChange}/>
                            <datalist id={'minBath'}>
                                <option value="0"/>
                                <option value="1"/>
                                <option value="2"/>
                                <option value="3"/>
                                <option value="4"/>
                                <option value="5"/>
                            </datalist>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="filter-select-wrapper">
                                <input list={'maxBath'} type={'text'} name={'maxBath'} className="form-control" placeholder={'TO'}  onChange={this.props.handleInputChange}/>
                                <datalist id={'maxBath'}>
                                    <option value="0"/>
                                    <option value="1"/>
                                    <option value="2"/>
                                    <option value="3"/>
                                    <option value="4"/>
                                    <option value="5"/>
                                </datalist>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}
export default BedSearch;



