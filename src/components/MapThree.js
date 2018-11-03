import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {env} from '../set.js';

class MapThree extends Component {
  static defaultProps = {
    center: {
        lat: 37.7577, 
        lng: -122.4376
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: env.GOOGLE_MAPS }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <img src="images/map-marker.png" alt='marker'
            lat={37.7577}
            lng={-122.4376}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapThree;