import React from 'react';
import '../App.css';

export default class MapsGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMap: 0,
            duration: this.props.duration
        };
        this.onPreviousClick = this.onPreviousClick.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
        this.onIndexClick = this.onIndexClick.bind(this);
    };

    componentDidMount() {
        this.setIntervalFunction();
    };

    setIntervalFunction = () => {
        clearInterval(this.setInterval)
        this.setInterval = setTimeout(() => {
            this.setState({
                activeMap: (
                    this.state.activeMap < this.props.elementsArray.length
                        ? this.state.activeMap + 1 : 0),
            },
                () => this.setIntervalFunction());
        }, this.state.duration[this.state.activeMap])
    };

    onPreviousClick = (e) => {
        e.preventDefault();
        console.log(this.props.elementsArray.length)
        this.setState({
            activeMap: (
                this.state.activeMap === 0
                    ? this.props.elementsArray.length - 1
                    : this.state.activeMap - 1),
        },
            () => this.setIntervalFunction());
    };

    onNextClick = (e) => {
        e.preventDefault();
        this.setState({
            activeMap: (
                this.state.activeMap < this.props.elementsArray.length
                    ? this.state.activeMap + 1 : 0),
        },
            () => this.setIntervalFunction());
    };

    onIndexClick = (e, index) => {
        e.preventDefault();
        this.setState({
            activeMap: index,
        },
            () => this.setIntervalFunction());
    };

    componentWillUnmount() {
        clearInterval(this.setInterval)
    };

    render() {
        return (
            <React.Fragment>
                <button
                    style={{ display: 'inline-block' }}
                    onClick={(e) => this.onPreviousClick(e)}>
                    Previous
                </button>
                <button
                    style={{ display: 'inline-block' }}
                    onClick={(e) => this.onNextClick(e)}>
                    Next
                </button>
                <div>
                    {this.props.elementsArray.map((item, index) => {
                        return (
                            <button
                                style={{ display: 'inline-block' }}
                                onClick={(e) => this.onIndexClick(e, index)}>
                                {index}
                            </button>
                        )
                    })}
                </div>
                <div>
                    {this.props.elementsArray.map((item, index) => {
                        return (
                            <div key={index} style={{
                                display: index === this.state.activeMap ? 'block' : 'none'
                            }}>{item}</div>
                        )
                    })}
                </div>
            </React.Fragment>

        )
    };
};