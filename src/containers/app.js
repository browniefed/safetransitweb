import React, { Component } from "react";
import { connect } from "react-redux";
import { Map, Marker, TileLayer } from "react-leaflet";
import map from "lodash/map";
import SocketContainer from "./socket";
import { divIcon, point } from "leaflet";
import { loadReports } from "../reducers/reports";
import styled, { css } from "react-emotion";

const position = [45.52, -122.6716007];

const cover = css({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
});

const colors = {
  bus: css`
    background-color: #333;
  `,
  rail90: css`
    background-color: #d11241;
  `,
  rail100: css`
    background-color: #0069aa;
  `,
  rail190: css`
    background-color: #ffc423;
  `,
  rail200: css`
    background-color: #008752;
  `,
  rail290: css`
    background-color: #d25d13;
  `,
};

const marker = css({
  transition: "all 7s ease",
  borderRadius: "15px",
  border: "1px solid #FFF",
  display: "inline-block",
  width: "auto!important",
  height: "auto!important",
  width: "30px!important",
  textAlign: "center",
  height: "30px!important",
  lineHeight: "30px",
  color: "#FFF",
  fontWeight: "bold",
});

const VehicleMarker = styled.div({}, type => {
  return {
    backgroundColor: colors[type],
  };
});

class App extends Component {
  componentDidMount() {
    this.props.loadReports();
  }

  render() {
    const { vehicles } = this.props;

    return (
      <SocketContainer>
        <div className={cover}>
          <Map center={position} zoom={13} className={cover}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

            {map(vehicles, vehicle => {
              const { routeNumber, type } = vehicle;

              let classes = [marker];

              if (type == "rail") {
                classes.push(colors[`rail${routeNumber}`]);
              } else if (type == "bus") {
                classes.push(colors.bus);
              }

              const icon = divIcon({
                className: classes.join(" "),
                html: `<span>${routeNumber}</span>`,
              });

              return (
                <Marker
                  icon={icon}
                  key={vehicle.vehicleID}
                  position={[vehicle.latitude, vehicle.longitude]}
                />
              );
              return (
                <Marker key={vehicle.vehicleID} position={[vehicle.latitude, vehicle.longitude]}>
                  <VehicleMarker>{routeNumber}</VehicleMarker>
                </Marker>
              );
            })}
          </Map>
        </div>
      </SocketContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    vehicles: state.vehicles,
    reports: state.reports,
  };
};

const mapDispatchToProps = {
  loadReports,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
