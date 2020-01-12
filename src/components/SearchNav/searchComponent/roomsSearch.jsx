import React from 'react';

class RoomsSearch extends React.Component{
    render() {
        const handleInputChange = this.props.handleInputChange;
        return (
            <div className="dropdown-menu inside-beds-search inside-search-button " aria-labelledby="dropdownMenuButton">
                    <div className="head-sub-main">
                        <h6>Rooms</h6>
                    </div>
                    <div className="filter-btn-group">
                        <input id="Baths-any-desktop"
                               name="roomfilter"
                               type="radio"
                               value="0"
                               checked="checked"
                               onChange={handleInputChange}/>
                        {/*<label for="Baths-any-desktop" class="filter-btn-group-text-sm" style="border: 1px solid red; color: red; padding-left:7px;">Any</label>*/}
                        <label htmlFor="Baths-any-desktop" className="filter-btn-group-text-sm"
                               style={{padding: '8px'}}>Any</label>

                        <input id="Baths-1-desktop" name="roomfilter" type="radio" value="1"
                               onChange={handleInputChange}/>
                        <label htmlFor="Baths-1-desktop">1+</label>

                        <input id="Baths-2-desktop" name="roomfilter" type="radio" value="2"
                               onChange={handleInputChange}/>
                        <label htmlFor="Baths-2-desktop">2+</label>

                        <input id="Baths-3-desktop" name="roomfilter" type="radio" value="3"
                               onChange={handleInputChange}/>
                        <label htmlFor="Baths-3-desktop">3+</label>

                        <input id="Baths-4-desktop" name="roomfilter" type="radio" value="4"
                               onChange={handleInputChange}/>
                        <label htmlFor="Baths-4-desktop">4+</label>

                        <input id="Baths-5-desktop" name="roomfilter" type="radio" value="5"
                               onChange={handleInputChange}/>
                        <label htmlFor="Baths-5-desktop">5+</label>

                        <div className="bed-filter-divider text-center margin-top margin-bottom">
                            Or Select Bathrooms Range
                        </div>
                        <div className="row filter-range-input justify-content-around">
                            <div className="col-5">
                                <div className="filter-select-wrapper">
                                    <input list={'roomfilter'} type={'text'} name={'roomfilter'} className="form-control" placeholder={'From'}  onChange={handleInputChange}/>
                                    <datalist id={'roomfilter'}>
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
                                    <input list={'maxRooms'} type={'text'} name={'maxRooms'} className="form-control" placeholder={'TO'}  onChange={handleInputChange}/>
                                    <datalist id={'maxRooms'}>
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
export default RoomsSearch;
