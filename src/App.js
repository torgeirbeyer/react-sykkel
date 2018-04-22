import React, { Component } from 'react';
import cors from 'cors'
import BikeList from './BikeList'
import './App.css';
import BikeMap from './Map'
import dotenv from 'dotenv'
import axios from 'axios'
dotenv.config()

class App extends Component {

render() {
  return (
    <BikeMap 
      center={{ lat: 59.94, lng: 10.73 }}
      zoom={13}
      containerElement={<div style= {{height: '100vh'}} />}
      mapElement={<div style={{height: '100vh'}} />}
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100vh` }} />}
      
    />
  )
  }
}

export default App;
