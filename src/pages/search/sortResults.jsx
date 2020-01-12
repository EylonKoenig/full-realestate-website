import React from 'react';

class SortResults extends React.Component {
    render() {
        let {resultsLength,handleInputChange} = this.props;
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
                        <div>
                            <fieldset className={'sortFiled'}>
                                <label>Sort by :</label>
                                <select name="sortby" className="hasCustomSelect" onChange={handleInputChange}>
                                    <option value="">Select your preference</option>
                                    <option value="formExpensive">Highest Price</option>
                                    <option value="formCheapest">Lowest Price</option>
                                </select>
                            </fieldset>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default SortResults;