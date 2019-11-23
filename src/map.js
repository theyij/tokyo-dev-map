import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    // marker styles
    style={{
      color: "white",
      background: "red",
      padding: "3px 3px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { lat: 47.49855629475769, lng: -122.14184416996333 },
        { latitude: 47.359423, longitude: -122.021071 },
        { latitude: 47.2052192687988, longitude: -121.988426208496 },
        { latitude: 47.6307081, longitude: -122.1434325 },
        { latitude: 47.3084488, longitude: -122.2140121 },
        { latitude: 47.5524695, longitude: -122.0425407 }
      ]
    };
  }
  static defaultProps = {
    // center of the map
    center: {
      lat: 47.5524695,
      lng: -122.0425407
    },
    zoom: 11
  };

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <AnyReactComponent
          lat={store.latitude}
          lng={store.longitude}
          key={index}
          text={index}
          id={"2"}
        />
      );
      //  onClick={() => console.log("You clicked me!")} />
    });
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          // get javascript google map api
          bootstrapURLKeys={{ key: "AIzaSyBN6r4kCwQtj1ej417udgBy1CON7COySSU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.displayMarkers()}
          {/* Add more markers  */}
          {/* <AnyReactComponent lat={40.713051} lng={-74.007233} text="p1" />
          <AnyReactComponent lat={40.737091} lng={-74.007234} text="p2" />
          <AnyReactComponent lat={40.707091} lng={-74.106234} text="p3" />
          <AnyReactComponent lat={40.707091} lng={-74.057234} text="p4" /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
