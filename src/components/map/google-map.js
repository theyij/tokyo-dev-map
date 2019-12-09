import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { API_KEY } from './apiKey.js';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 60.95,
      lng: 30.33
    },
    zoom: 11
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
