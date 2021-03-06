import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import {env} from '../set.js'

class MapOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                width: 400,
                height: 400,
                latitude: 37.7577,
                longitude: -122.4376,
                zoom: 8
            }
        }
    };

    render() {
        return (<div>
            <ReactMapGL  mapboxApiAccessToken={env.MAP_BOX}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
            >
            <Marker latitude={37.78} longitude={-122.43} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png" alt="marker"/></Marker>
            <Marker latitude={37.80} longitude={-122.45} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png" alt="marker"/></Marker>
            <Marker latitude={37.82} longitude={-122.41} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png" alt="marker"/></Marker>
            <Marker latitude={37.84} longitude={-122.47} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png" alt="marker"/></Marker>
            <Marker latitude={37.86} longitude={-122.49} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png" alt="marker"/></Marker>
            </ReactMapGL>
            </div>
        );
    }
}

export default MapOne;