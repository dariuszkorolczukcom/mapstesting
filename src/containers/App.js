import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MapOne from '../components/MapOne';
import MapTwo from '../components/MapTwo';
import MapThree from '../components/MapThree';
import MapFour from '../components/MapFour';
import '../App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <div  className='Map'>
          <Route path="/mapone" component={MapOne} />
          <Route path="/maptwo/" component={MapTwo} />
          <Route path="/mapthree/" component={MapThree} />
          <Route path="/mapfour/" component={MapFour} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App