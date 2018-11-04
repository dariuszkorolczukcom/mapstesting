import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {env} from '../set.js';

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      `http://maps.googleapis.com/maps/api/js?key=${env.GOOGLE_MAPS}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={5} defaultCenter={{ lat: 53.479998, lng:-2.24111 }}>
    <Marker key={1} position={{ lat: 53.479998, lng:-2.24111 }} />
    <Marker key={2} position={{ lat: 37.78, lng: -122.41 }} />
    <Marker key={3} position={{ lat: 37.78, lng: -122.43 }} />
    <Marker key={4} position={{ lat: 37.78, lng: -122.47 }} />
    <Marker key={5} position={{ lat: 37.78, lng: -122.49 }} />
  </GoogleMap>
));

const enhance = _.identity;

const MapTwo = () => [
  <MyMapComponent key="map" />
];

export default enhance(MapTwo);