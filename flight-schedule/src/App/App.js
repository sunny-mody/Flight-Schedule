import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Filters from "../Filters/Filters";
import Results from "../Results/Results";

import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlane,
  faPlaneDeparture,
  faPlaneArrival,
  faCalendarAlt,
  faRupeeSign,
  faGlobeAsia
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPlane,
  faPlaneDeparture,
  faPlaneArrival,
  faCalendarAlt,
  faRupeeSign,
  faGlobeAsia
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flightData: [],
      dataFromFilters: [],
      filteredOneWayFlightData: [],
      filteredReturnWayFlightData: []
    };
  }

  componentDidMount = () => {
    axios
      .get(`https://flight-search-engine-1f7fa.firebaseio.com/flight-data.json`)
      .then(res => {
        const flightData = res.data;
        this.setState({ flightData });
      });
  };

  myCallback = dataFromFilters => {
    this.setState({
      dataFromFilters: dataFromFilters
    });

    var oneWayArray = this.state.flightData.filter(function(el) {
      return (
        el.origin.city === dataFromFilters.originCity &&
        el.destination.city === dataFromFilters.destinationCity &&
        el.origin.schedule.departure_date === dataFromFilters.departureDate
      );
    });

    var returnWayArray = this.state.flightData.filter(function(el) {
      return (
        el.origin.city === dataFromFilters.destinationCity &&
        el.destination.city === dataFromFilters.originCity &&
        el.origin.schedule.departure_date === dataFromFilters.returnDate
      );
    });

    this.setState({
      filteredOneWayFlightData: oneWayArray,
      filteredReturnWayFlightData: returnWayArray
    });
  };

  render() {
    let flightOneWayData = this.state.filteredOneWayFlightData;
    let flightReturnWayData = this.state.filteredReturnWayFlightData;
    let dataFromFilters = this.state.dataFromFilters;

    return (
      <div className="App">
        <Header />

        <Filters callbackFromParent={this.myCallback} />
        <Results
          flightOneWayData={flightOneWayData}
          flightReturnWayData={flightReturnWayData}
          dataFromFilters={dataFromFilters}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
