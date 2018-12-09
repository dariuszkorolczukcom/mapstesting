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
      <MapsGrid duration={[10000,10000,10000,10000,10000]} 
      elementsArray={[[<div>1</div>],[<div>2</div>],[<div>3</div>],[<div>4</div>],[<div>5</div>]]}/>
      <Footer />
    </div>
  );
}

export default App