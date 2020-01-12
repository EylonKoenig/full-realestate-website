import React from 'react';

class PriceSearch extends React.Component{
    render() {
        const handleInputChange = this.props.handleInputChange;
        return (
            <div className="dropdown-menu inside-search-button price-dropdown" role="menu" aria-labelledby="menu1">
                    <div className="head-sub-main">
                        <h6>Price range</h6>
                    </div>
                    <div className="d-flex">
                        <div className={'d-flex'}>
                            <div className="price-row">
                                <input id="minPrice"
                                       className="price-box"
                                       name={'minPrice'}
                                       type="text"
                                       list={'price-input'}
                                       placeholder="$ No Min"
                                       onChange={handleInputChange}/>
                                <input id="priceCheck4k" name="priceCheckMin" type="radio" value="400000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck4k">$400k</label>

                                <input id="priceCheck8k" name="priceCheckMin" type="radio" value="800000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck8k">$800k</label>

                                <input id="priceCheck1.2m" name="priceCheckMin" type="radio" value="1200000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck1.2m">$1.2M</label>

                                <input id="priceCheck1.6m" name="priceCheckMin" type="radio" value="1600000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck1.6m">$1.6M</label>

                                <input id="priceCheck2m" name="priceCheckMin" type="radio" value="200000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck2m">$2M</label>

                                <input id="priceCheck2.4m" name="priceCheckMin" type="radio" value="2400000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck2.4m">$2.4m</label>

                                <input id="priceCheckanymin" name="priceCheckMin" type="radio" value="0"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheckanymin">Any Price</label>
                            </div>
                            <p>_</p>
                            <div className="price-row">
                                <input id="maxPrice"
                                       className="price-box"
                                       name={'maxPrice'}
                                       type="text"
                                       placeholder="$ No Max"
                                       onChange={handleInputChange}/>
                                <input id="priceCheck4kmax" name="priceCheckMax" type="radio" value="400000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck4kmax">$400k</label>

                                <input id="priceCheck8kmax" name="priceCheckMax" type="radio" value="800000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck8kmax">$800k</label>

                                <input id="priceCheck1.2mmax" name="priceCheckMax" type="radio" value="1200000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck1.2mmax">$1.2M</label>

                                <input id="priceCheck1.6mmax" name="priceCheckMax" type="radio" value="1600000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck1.6mmax">$1.6M</label>

                                <input id="priceCheck2mmax" name="priceCheckMax" type="radio" value="200000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck2mmax">$2M</label>

                                <input id="priceCheck2.4mmax" name="priceCheckMax" type="radio" value="2400000"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheck2.4mmax">$2.4m</label>

                                <input id="priceCheckany" name="priceCheckMax" type="radio" value="9999999999"
                                       onChange={handleInputChange}/>
                                <label htmlFor="priceCheckany">Any Price</label>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default PriceSearch;



