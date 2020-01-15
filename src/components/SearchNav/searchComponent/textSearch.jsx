import React from 'react';

class TextSearch extends React.Component{
    render() {
        const handleInputChange = this.props.handleInputChange;
        return (
            <div className="input-group md-form form-sm form-2 pl-0 input-form">
                <input id="searchInput"
                       className="form-control my-0 py-1 search-input"
                       type="text"
                       name={"address"}
                       placeholder="Manhattan, NY"
                       aria-label="Search"
                       onChange={handleInputChange}/>
                <div className="input-group-append" style={{zIndex: 1}}>
                                <span className="input-group-text lighten-3 search-icon" id="basic-text1">
                                    <i className="fas fa-search text-grey" aria-hidden="true"></i>
                                </span>
                </div>
                <button className="clear-input"><i className="fas fa-times"></i></button>
            </div>
        )
    }
}
export default TextSearch;



