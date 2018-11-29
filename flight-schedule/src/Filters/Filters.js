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

  handleBlur = e => {
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

          <form className="search-form">
            <div>
              <label htmlFor="originCity">Origin</label>
              <input
                onBlur={this.handleBlur}
                type="text"
                id="originCity"
                placeholder="Origin City"
                required
              />
            </div>

            <div>
              <label htmlFor="destinationCity">Destination</label>
              <input
                onBlur={this.handleBlur}
                type="text"
                id="destinationCity"
                placeholder="Destination City"
                required
              />
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

            <input
              onClick={this.handleSubmit}
              type="button"
              defaultValue="Search"
            />
          </form>

          <div className="price-filter-wrapper">
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
