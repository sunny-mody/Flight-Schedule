import React, { Component } from 'react';

class Results extends Component {
    render() {
        return (
            <main className="search-results-container">
                <div className="fs-result-header">
                    <div>Pune > Delhi > Pune</div>
                    <div>
                        <div>Depart : 1 Jan 2012</div>
                        <div>Return : 10 Jan 2012</div>
                    </div>
                </div>
                <div className="fs-result-body">

                    <div className="fs-result">
                        <div class="fs-result-left-wrapper">
                            <div className="fs-amount">Rs 9500</div>
                            <div className="fs-details">
                                <div className="fs-depart-details">
                                    <div>AI-202</div>
                                    <div>PNQ > DEL</div>
                                    <div>Depart : 10:00 Am</div>
                                    <div>Arrive : 12:00 PM</div>
                                </div>
                                <div className="fs-return-details">
                                    <div>AI-202</div>
                                    <div>PNQ > DEL</div>
                                    <div>Depart : 08:00 PM</div>
                                    <div>Arrive : 11:00 PM</div>
                                </div>
                            </div>
                        </div>

                        <div class="fs-result-right-wrapper">
                            <img src="" alt=""></img>
                            <button className="fs-book">Book this Flight</button>
                        </div>                        
                    </div>

                    <div className="fs-result">
                        <div class="fs-result-left-wrapper">
                            <div className="fs-amount">Rs 9500</div>
                            <div className="fs-details">
                                <div className="fs-depart-details">
                                    <div>AI-202</div>
                                    <div>PNQ > DEL</div>
                                    <div>Depart : 10:00 Am</div>
                                    <div>Arrive : 12:00 PM</div>
                                </div>
                                <div className="fs-return-details">
                                    <div>AI-202</div>
                                    <div>PNQ > DEL</div>
                                    <div>Depart : 08:00 PM</div>
                                    <div>Arrive : 11:00 PM</div>
                                </div>
                            </div>
                        </div>

                        <div class="fs-result-right-wrapper">
                            <img src="" alt=""></img>
                            <button className="fs-book">Book this Flight</button>
                        </div>                        
                    </div>

                    <div className="fs-result">
                        <div class="fs-result-left-wrapper">
                            <div className="fs-amount">Rs 9500</div>
                            <div className="fs-details">
                                <div className="fs-depart-details">
                                    <div>AI-202</div>
                                    <div>PNQ > DEL</div>
                                    <div>Depart : 10:00 Am</div>
                                    <div>Arrive : 12:00 PM</div>
                                </div>
                                <div className="fs-return-details">
                                    <div>AI-202</div>
                                    <div>PNQ > DEL</div>
                                    <div>Depart : 08:00 PM</div>
                                    <div>Arrive : 11:00 PM</div>
                                </div>
                            </div>
                        </div>

                        <div class="fs-result-right-wrapper">
                            <img src="" alt=""></img>
                            <button className="fs-book">Book this Flight</button>
                        </div>                        
                    </div>

                </div>
            </main>
        )
    }
}

export default Results;