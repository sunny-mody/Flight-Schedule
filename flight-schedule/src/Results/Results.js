import React, { Component } from "react";
import "./Results.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightOneWayData: props.flightOneWayData,
      flightReturnWayData: props.flightReturnWayData,
      dataFromFilters: []
    };
  }

  componentWillReceiveProps = nextProps => {
    if (this.props !== nextProps) {
      this.setState({
        flightOneWayData: nextProps.flightOneWayData,
        flightReturnWayData: nextProps.flightReturnWayData,
        dataFromFilters: nextProps.dataFromFilters
      });
    }
  };

  render() {
    let flightOneWayData = this.state.flightOneWayData;
    let flightReturnWayData = this.state.flightReturnWayData;
    let dataFromFilters = this.state.dataFromFilters;

    return (
      <main className="search-results-container">
        {/* load search title */}
        {dataFromFilters.formFilled ? (
          <div className="fs-result-header">
            <div>
              {dataFromFilters.originCity} > {dataFromFilters.destinationCity}
              {!dataFromFilters.oneWay
                ? " > " + dataFromFilters.originCity
                : ""}
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon="calendar-alt" /> Depart :{" "}
                {dataFromFilters.departureDate}
              </div>
              {!dataFromFilters.oneWay ? (
                <div>
                  <FontAwesomeIcon icon="calendar-alt" /> Return :{" "}
                  {dataFromFilters.returnDate}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="search-empty">
            <div>Search & Filter your flights</div>
            <FontAwesomeIcon icon="globe-asia" size="6x" />
            <div>Keep Exploring !!!</div>
          </div>
        )}

        {/* load search results */}
        <div className="fs-result-body">
          {flightOneWayData.map((flightT, i) =>
            dataFromFilters.oneWay ? (
              flightT.price <= dataFromFilters.priceFilter ? (
                <div className="fs-result" key={i}>
                  <div className="fs-result-left-wrapper">
                    <div className="fs-amount">
                      <FontAwesomeIcon icon="rupee-sign" />
                      {flightT.price}
                    </div>
                    <div className="fs-details">
                      {/* one way details                */}
                      <div className="fs-depart-details">
                        <div>
                          <FontAwesomeIcon icon="plane" /> {flightT.id}
                        </div>
                        <div class="cities">
                          {flightT.origin.code} > {flightT.destination.code}
                        </div>
                        <div>
                          <FontAwesomeIcon icon="plane-departure" /> Depart :{" "}
                          {flightT.origin.schedule.departure_time}
                        </div>
                        <div>
                          <FontAwesomeIcon icon="plane-arrival" /> Arrive :{" "}
                          {flightT.destination.schedule.arrival_time}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="fs-result-right-wrapper">
                    <button className="fs-book">Book this Flight</button>
                  </div>
                </div>
              ) : (
                ""
              )
            ) : (
              flightReturnWayData.map((flightR, j) =>
                flightT.price + flightR.price <= dataFromFilters.priceFilter ? (
                  <div className="fs-result" key={j}>
                    <div className="fs-result-left-wrapper">
                      <div className="fs-amount">
                        <FontAwesomeIcon icon="rupee-sign" />{" "}
                        {flightT.price + flightR.price}
                      </div>
                      <div className="fs-details">
                        {/* one way details                */}
                        <div className="fs-depart-details">
                          <div>
                            <FontAwesomeIcon icon="plane" /> {flightT.id}
                          </div>
                          <div class="cities">
                            {flightT.origin.code} > {flightT.destination.code}
                          </div>
                          <div>
                            <FontAwesomeIcon icon="plane-departure" /> Depart :{" "}
                            {flightT.origin.schedule.departure_time}
                          </div>
                          <div>
                            <FontAwesomeIcon icon="plane-arrival" /> Arrive :{" "}
                            {flightT.destination.schedule.arrival_time}
                          </div>
                        </div>

                        {/* return details */}
                        <div className="fs-return-details">
                          <div>
                            <FontAwesomeIcon icon="plane" /> {flightR.id}
                          </div>
                          <div class="cities">
                            {flightR.origin.code} > {flightR.destination.code}
                          </div>
                          <div>
                            <FontAwesomeIcon icon="plane-departure" /> Depart :{" "}
                            {flightR.origin.schedule.departure_time}
                          </div>
                          <div>
                            <FontAwesomeIcon icon="plane-arrival" /> Arrive :{" "}
                            {flightR.destination.schedule.arrival_time}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="fs-result-right-wrapper">
                      <button className="fs-book">Book this Flight</button>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            )
          )}
        </div>
      </main>
    );
  }
}

export default Results;
