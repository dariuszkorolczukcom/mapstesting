import React, { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

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
            <ReactMapGL  mapboxApiAccessToken={'pk.eyJ1IjoiZGFyaXVzemtvcm9sY3p1ayIsImEiOiJjam56dHFhOGQwYjFmM3ZsaW0yb3d4ZmhqIn0.wEimGWhG85j3O8kbr26w1Q'}
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
            >
            <Marker latitude={37.78} longitude={-122.43} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png"/></Marker>
            <Marker latitude={37.80} longitude={-122.45} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png"/></Marker>
            <Marker latitude={37.82} longitude={-122.41} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png"/></Marker>
            <Marker latitude={37.84} longitude={-122.47} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png"/></Marker>
            <Marker latitude={37.86} longitude={-122.49} offsetLeft={-20} offsetTop={-10}><img className="marker" src="images/map-marker.png"/></Marker>
            </ReactMapGL>
            </div>
        );
    }
}

export default MapOne;