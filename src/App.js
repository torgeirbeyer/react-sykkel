import React, { Component } from 'react';
import './App.css';
import BikeMap from './Map'
import dotenv from 'dotenv'
dotenv.config()

class App extends Component {

render() {
  return (
    <BikeMap 
      center={{ lat: 59.94, lng: 10.73 }}
      zoom={13}
      containerElement={<div 
        style= {{height: '100vh'}} 
        />}
      mapElement={<div 
        style={{height: '100vh'}} 
        />}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1W-hs-f2uk2FSqmcv0_6MFHn5GlLtVuQ&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div 
        style={{ height: `100vh` }} 
        />}
    />
  )
  }
}

export default App;
