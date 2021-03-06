import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import config from '../../config';
import Marker from './marker';


class FlatMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div
        className="map-container"
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.GOOGLE_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.latitude}
            lng={this.props.longitude}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default FlatMap;
