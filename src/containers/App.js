import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MapOne from '../components/MapOne';
import MapTwo from '../components/MapTwo';
import MapThree from '../components/MapThree';
// import MapFour from '../components/MapFour';
import MapFive from '../components/MapFive';
import MapSix from '../components/MapSix';
import MapsGrid from './MapsGrid';
import '../App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      {/* <Router>
        <div  className='Map'>
          <Route path="/mapone" component={MapOne} />
          <Route path="/maptwo/" component={MapTwo} />
          <Route path="/mapthree/" component={MapThree} />
          <Route path="/mapfive/" component={() => (<div><MapFive/><MapSix/></div>)} />
        </div>
      </Router> */}
      <MapsGrid duration={[6000,6000,6000,6000,6000]} elementsArray={[[<MapOne/>],[<MapTwo/>],[<MapThree/>],[<MapFive/>],[<MapSix/>]]}/>
      <Footer />
    </div>
  );
}

export default App