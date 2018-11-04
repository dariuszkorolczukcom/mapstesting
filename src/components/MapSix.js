import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker, Polygon } from 'google-maps-react';
import {env} from '../set.js';
import CircularProgress from '@material-ui/core/CircularProgress';

const style = {
    width: '48%',
    height:'50%',
    margin:'1%',
    marginLeft:'49%',
  border:'2px solid rgb(43, 120, 187)',
  borderRadius:'10px 25px 25px 10px',
  display:'inline-block'
  }
  const LoadingContainer = (props) => (
    <div style={{textAlign:"center",align:"center"}}><CircularProgress style={{position:'relative',marginTop:'150px'}} size={'100px'}/></div>
  )

export class MapSix extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showingInfoWindow: false,
          activeMarker: {},
          selectedPlace: {}
        }
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
      }
      compo
      onMarkerClick = (props, marker, e) => {
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
      }
      onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          });
        }
      }
    render() {
        return (
          <div>
            <Map 
            google={this.props.google}
            style={style}
            onClick = { this.onMapClick }
            initialCenter = {{ lat: 54.5, lng: -3 }}
            zoom={5}
               >
                <Marker
          onClick = { this.onMarkerClick }
          title = { 'RedSeven' }
          position = {{ lat: 53.479998, lng:-2.24111 }}
          name = { 'RedSeven' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
            <div
              variant = 'headline'
              component = 'h4'
            >
              RedSeven
            </div>
            <p>
              55 Spring Gardens <br />
              Manchester
            </p>
            
        </InfoWindow>
            </Map>
          </div>
        )
      }
    
}
export default GoogleApiWrapper({
    apiKey: (env.GOOGLE_MAPS_2),
    LoadingContainer: LoadingContainer
})(MapSix)