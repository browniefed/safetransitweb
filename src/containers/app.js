import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { Map, Marker, TileLayer } from "react-leaflet";
import map from "lodash/map";
import VehicleSocket from "./VehicleSocket";
import AppCss from "./app.css";

const position = [45.52, -122.6716007];

const cover = { position: "absolute", left: 0, right: 0, top: 0, bottom: 0 };

class App extends Component {
  render() {
    const { vehicles } = this.props;

    return (
      <VehicleSocket>
        <div style={cover}>
          <Map center={position} zoom={13} style={cover}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

            {map(vehicles, vehicle => {
              const { routeNumber, type } = vehicle;
              return (
                <Marker key={vehicle.vehicleID} position={[vehicle.latitude, vehicle.longitude]}>
                  <div>{routeNumber}</div>
                </Marker>
              );
            })}
          </Map>
        </div>
      </VehicleSocket>
    );
  }
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles,
  };
};
export default connect(mapStateToProps)(App);
