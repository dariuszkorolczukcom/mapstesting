import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';

const Header = () => {
    return (
      <div>
      <Button style={buttonStyle} variant="contained" href="/mapone">react-map-gl</Button>
        <Button style={buttonStyle} variant="contained" href="/maptwo">react-google-maps</Button>
        <Button style={buttonStyle} variant="contained" href="/mapthree">google-map-react</Button>
        <Button style={buttonStyle} variant="contained" href="/mapfour">google-maps-react</Button>
        <Button style={buttonStyle} variant="contained" href="/mapfive">google-maps-react 2</Button>
        </div>
    );
}

const buttonStyle = {
  margin:"10px",
  padding:'5px',
  width:'30%',
  position:'relative'
}

export default Header;
