import React from "react";
import PageHeader from "./../../Layout/PageHeader";
import cookie from "react-cookie";

export default class Tracking extends React.Component {
  render() {
    return (
      <div className="page-content">
        <PageHeader Header="Tracking" />
        <PageContainer />
      </div>
    );
  }
}

class PageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      rider_id: null,
      lastTimestamp: 1460100530 // actually cuurent timestamp but we don't haave current data
    };
  }

  componentDidMount() {
    var self= this;
    var token = {tokenValue: cookie.load("apiToken")};
    var dataToSend = {last_timestamp: (this.state.lastTimestamp + 30)};
    $.ajax({
      type: "GET",
      url: "http://192.168.1.236/sfdata/track/1866788",
      headers : getHeader(),
      data: dataToSend
    })
    .done(function(data) {
      self.setState({data: data.text, rider_id: data.rider_id, lastTimestamp: (this.state.lastTimestamp + 60)})
      setTimeout(function(){ self.updateFunction() }, 60000);
    })
    .fail(function(jqXhr) {
      console.log("failed to load ajax2 data");
    });
  }

  updateFunction() {
    var self= this;
    var token = {tokenValue: cookie.load("apiToken")};
    var dataToSend = {last_timestamp: (this.state.lastTimestamp + 30), rider_id: this.state.rider_id};
    $.ajax({
      type: "GET",
      url: "http://192.168.1.236/sfdata/track/1866788",
      headers : getHeader(),
      data: dataToSend
    })
    .done(function(data) {
      self.setState({data: data, lastTimestamp: (this.state.lastTimestamp + 60)})
      setTimeout(function(){ self.updateFunction() }, 60000);
    })
    .fail(function(jqXhr) {
      console.log("failed to load ajax2 data");
    });
  }

  getLocation() {
    var x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + 
        "<br>Longitude: " + position.coords.longitude; 
    }
  }

  render() {
    const fontSize = {fontSize: "14px"};

    return (
      <div className="caption col-md-11">
        Hello
      </div>
    );
  }
}