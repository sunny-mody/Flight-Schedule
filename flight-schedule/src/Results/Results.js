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
    // let flightData = this.state.flightData;
    let flightOneWayData = this.state.flightOneWayData;
    let flightReturnWayData = this.state.flightReturnWayData;
    let dataFromFilters = this.state.dataFromFilters;

    return (
      <main className="search-results-container">
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
                  <FontAwesomeIcon icon="calendar-alt" /> Return : {dataFromFilters.returnDate}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}

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
                    <img src="assets/ga.png" alt="" />
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
                            <FontAwesomeIcon icon="plane-departure" /> Depart
                            : {flightR.origin.schedule.departure_time}
                          </div>
                          <div>
                            <FontAwesomeIcon icon="plane-arrival" /> Arrive 
                            : {flightR.destination.schedule.arrival_time}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="fs-result-right-wrapper">
                      <img src="assets/ga.png" alt="" />
                      <button className="fs-book">Book this Flight</button>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            )
          )}

          {/* {flightOneWayData.map((flight, i) => (

          flightReturnWayData.map((flightR, j) => (
            (flight.provider === flightR.provider) && ((flight.price + flightR.price) <= dataFromFilters.priceFilter)
            ? (

                  flightOneWayData.map((flight, i) => (
                    <div className="fs-result" key={i}>
                      <div className="fs-result-left-wrapper">
                        <div className="fs-amount">

                                              
                            <span> RS
                            {!dataFromFilters.oneWay 
                              ?  ( 
                                flightReturnWayData.map((flightR, j) => ( 
                                  flight.provider === flightR.provider
                                    ? flight.price + flightR.price
                                    : ''                          
                                ))
                              ) : (
                                flight.price
                              )
                            } 
                            </span>
                          

                        </div>
                        <div className="fs-details">
                                            
                          <div className="fs-depart-details">
                            <div>{flight.id}</div>
                            <div>
                              {flight.origin.code} > {flight.destination.code}
                            </div>
                            <div>Depart : {flight.origin.schedule.departure_time}</div>
                            <div>
                              Arrive : {flight.destination.schedule.arrival_time}
                            </div>
                          </div>
                          
                          {flightReturnWayData.map((flightR, j) => (
                              <div className="fs-return-details">
                                {!dataFromFilters.oneWay && (flight.provider === flightR.provider) 
                                  ?  ( 
                                    <div>
                                      <div>{flightR.id}</div>
                                      <div>{flightR.origin.code} > {flightR.destination.code}</div>
                                      <div>Depart : {flightR.origin.schedule.departure_time}</div>
                                      <div>Arrive : {flightR.origin.schedule.arrival_time}</div>
                                    </div>
                                  ) : (
                                    <React.Fragment></React.Fragment>
                                )}
                              </div>                     
                          ))}
                          
                        </div>
                      </div>

                      <div className="fs-result-right-wrapper">
                        <img src="assets/ga.png" alt="" />
                        <button className="fs-book">Book this Flight</button>
                      </div>
                    </div>
                  ))

            )
            : ''
          ))
        ))} */}
        </div>
      </main>
    );
  }
}

export default Results;
