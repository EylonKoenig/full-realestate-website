import React from 'react';

class StatisticsData extends React.Component {
    render () {
        return(
            <div className="container-fluid">
                <div className="row justify-content-around details">
                    <div className="col-6 col-md-2 text-center">
                        <a href="/">
                            <span>8,680</span>
                            <p>Homes for sale</p>
                        </a>
                    </div>
                    <div className="col-6 col-md-2 text-center">
                        <a href="/">
                            <span>409</span>
                            <p>Open houses</p>
                        </a>
                    </div>
                    <div className="col-6 col-md-2 text-center">
                        <a href="/">
                            <span>6,677</span>
                            <p>Recently sold</p>
                        </a>
                    </div>
                    <div className="col-6 col-md-2 text-center">
                        <a href="/">
                            <span>21</span>
                            <p>Foreclosures</p>
                        </a>
                    </div>
                    <div className="col-6 col-md-2 text-center">
                        <a href="/">
                            <span>640</span>
                            <p>Price reduced</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }}
export default StatisticsData;

