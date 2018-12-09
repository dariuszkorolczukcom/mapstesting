import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MapOne from '../components/MapOne';
import MapTwo from '../components/MapTwo';
import MapThree from '../components/MapThree';
// import MapFour from '../components/MapFour';
import MapFive from '../components/MapFive';
import MapSix from '../components/MapSix';
import '../App.css';

const mapsArray = (activeMap, elementsArray) => {
            return (
                elementsArray[activeMap]
                            )
}

export default class MapsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMap: 0,
            duration: this.props.duration
        }
        // binding this to event-handler functions
        // this.onMarkerClick = this.onMarkerClick.bind(this);
        // this.onMapClick = this.onMapClick.bind(this);
    }

    componentDidMount() {
        this.setIntervalFunction();
    };

    setIntervalFunction = () => {
        setTimeout(() => {
            this.setState({ 
                activeMap: (this.state.activeMap <=4 ? this.state.activeMap+1 : 0),
            },
            () =>  this.setIntervalFunction());
        }, this.state.duration[this.state.activeMap])
    };

    render() {
        return (
            <React.Fragment>
                {this.props.elementsArray[this.state.activeMap]}
            </React.Fragment>

        )
    }

}