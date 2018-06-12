import React, { Component } from "react";
import { connect } from "react-redux";
import { updateVehicles } from "../reducers/vehicles";
import { addReport } from "../reducers/reports";
import io from "socket.io-client";

class SocketContainer extends Component {
  componentDidMount() {
    this.socket = io(process.env.REACT_APP_SERVER);
    this.socket.on("vehicles_update", data => this.props.updateVehicles(data));
    this.socket.on("incident_report", data => this.props.addReport(data));
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
  addReport,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SocketContainer);
