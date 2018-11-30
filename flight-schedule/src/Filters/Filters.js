import React, { Component } from "react";
import "./Filters.css";

class Filters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cityList: ["Pune", "Delhi", "Mumbai", "Kolkata"],
      oneWay: true,
      originCity: "",
      destinationCity: "",
      departureDate: "",
      returnDate: "",
      passengerCount: "",
      priceFilter: "5000",
      formFilled: false
    };
  }

  selectCity = e => {
    console.log(e.target.value);
    switch (e.target.id) {
      case "originCity":
        this.setState({
          originCity: e.target.value
        });
        break;
      case "destinationCity":
        this.setState({
          destinationCity: e.target.value
        });
        break;
      default:
        break;
    }
  };

  handleBlur = e => {
    switch (e.target.id) {
      case "passengerCount":
        this.setState({
          passengerCount: e.target.value
        });
        break;
      case "departureDate":
        this.setState({
          departureDate: e.target.value
        });
        break;
      case "returnDate":
        this.setState({
          returnDate: e.target.value
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ formFilled: true }, () => {
      let dataInFilters = this.state;
      this.props.callbackFromParent(dataInFilters);
    });
  };

  priceChange = e => {
    let newPrice = e.target.value;

    this.setState({ priceFilter: newPrice }, () => {
      let dataInFilters = this.state;
      this.props.callbackFromParent(dataInFilters);
    });
  };

  selectTab = e => {
    if (e.target.id === "oneWayTab") {
      this.setState({
        oneWay: true
      });
      document.getElementById("returnTab").classList.remove("active");
      document.getElementById("oneWayTab").classList.add("active");
    } else {
      this.setState({
        oneWay: false
      });
      document.getElementById("returnTab").classList.add("active");
      document.getElementById("oneWayTab").classList.remove("active");
    }
  };

  render() {
    return (
      <aside className="search-filters-container">
        <section>
          <ul className="flight-type-tabs">
            <li onClick={this.selectTab} id="oneWayTab" className="active">
              One Way
            </li>
            <li onClick={this.selectTab} id="returnTab">
              Return
            </li>
          </ul>

          <form className="search-form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="originCity">Origin</label>

              <select
                onChange={this.selectCity}
                name="originCity"
                id="originCity"
                required
              >
                <option defaultValue value="">
                  Origin
                </option>
                <option value="Pune">Pune</option>
              </select>
            </div>

            <div>
              <label htmlFor="destinationCity">Destination</label>
              <select
                onChange={this.selectCity}
                name="destinationCity"
                id="destinationCity"
                required
              >
                <option defaultValue value="">
                  Destination
                </option>
                <option defaultValue value="Delhi">
                  Delhi
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="passengerCount">Passengers</label>
              <input
                onBlur={this.handleBlur}
                type="number"
                id="passengerCount"
                placeholder="Passengers"
                required
              />
            </div>

            <div>
              <label htmlFor="departureDate">Departure Date</label>
              <input
                onBlur={this.handleBlur}
                type="date"
                id="departureDate"
                min="2018-12-01"
                max="2018-12-01"
                required
              />
            </div>

            {!this.state.oneWay ? (
              <div>
                <label htmlFor="returnDate">Return Date</label>
                <input
                  onBlur={this.handleBlur}
                  type="date"
                  id="returnDate"
                  min="2018-12-02"
                  max="2018-12-02"
                  required
                />
              </div>
            ) : (
              <React.Fragment />
            )}

            <input type="submit" defaultValue="Search" />
          </form>

          <div className="price-filter-wrapper">
            <label htmlFor="priceFilter">Refine flight search</label>
            <input
              onChange={this.priceChange}
              type="range"
              id="priceFilter"
              name="price"
              min="0"
              max="20000"
              step="100"
              value={this.state.priceFilter}
            />
            <div className="price-filter-amount">
              <span className="min">0</span>
              <strong>
                <span className="selectedPrice">
                  ( {this.state.priceFilter} )
                </span>
              </strong>
              <span className="max">20000</span>
            </div>
          </div>
        </section>
      </aside>
    );
  }
}

export default Filters;
