import React, { Component } from "react";
import { connect } from "react-redux";
import { updateVehicles } from "../actions/vehicles";
import io from "socket.io-client";

class VehicleSocket extends Component {
  componentDidMount() {
    this.socket = io(process.env.REACT_APP_SERVER);
    this.socket.on("vehicles_update", data => this.props.updateVehicles(data));
  }

  componentWillUnmount() {
    //disconnect scoket
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = {
  updateVehicles,
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSocket);
