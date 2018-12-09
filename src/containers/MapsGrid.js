import React from 'react';
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
                {this.props.elementsArray.map((item, index) => {
                      return(<React.Fragment><div style={{display: index == this.state.activeMap ? 'block': 'none'}}>{item}</div></React.Fragment>)
                })}
            </React.Fragment>

        )
    }

}