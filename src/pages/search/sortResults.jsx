import React from 'react';

class SortResults extends React.Component {
    render() {
        let { resultsLength, handleInputChange, type } = this.props;
        const statusList = ['','pending', 'approved', 'denied', 'removed']
        return (
            <div className={'sortResults'}>
                {resultsLength === 0 ? <div>
                    <div className="no-result">
                        <div>
                            <h2 className={'my-3'}>We didn't find matching results</h2>
                            <a href={'/apartments'}>Remove all filters</a>
                        </div>

                    </div>
                </div> :
                    <div className={'totalHomes d-flex'}>{`${resultsLength} HOME`}
                        <div style={{display:'flex'}}>
                            <fieldset className={'sortFiled'}>
                                <label>Sort by :</label>
                                <select name="sortby" className="hasCustomSelect" onChange={handleInputChange}>
                                    <option value="">Select your preference</option>
                                    <option value="formExpensive">Highest Price</option>
                                    <option value="formCheapest">Lowest Price</option>
                                </select>
                            </fieldset>
                            {type === 'admin' &&
                                <fieldset className={'sortFiled'}>
                                    <label>Filter by: </label>
                                    <select name="filterBy" className="hasCustomSelect" onChange={handleInputChange}>
                                       {statusList.map((element,i) => <option key={i} value={element}>Status: {element}</option>)}
                                </select>
                                </fieldset>
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default SortResults;