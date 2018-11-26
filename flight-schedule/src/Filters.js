import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return (
            <aside className="searc-filters-container">
                <ul class="flight-type-tabs">
                    <li>
                        <a href="">One Way</a>
                    </li>
                    <li>
                    <a href="">Return</a>
                    </li>
                </ul>

                <form class="search-form">
                    <input type="text" placeholder="Enter Origin City"></input>
                    <input type="text" placeholder="Enter Destination City"></input>

                    <input type="number" placeholder="Passengers"></input>

                    <input type="date"></input>
                    <input type="date"></input>

                    <input type="Submit" value="Search"></input>
                </form>
            </aside>
        )
    }
}

export default Filters;