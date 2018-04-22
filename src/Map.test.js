import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';

it('renders map without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Map 
    containerElement={<div style= {{height: '100vh'}} />}
    mapElement={<div style={{height: '100vh'}} />}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1W-hs-f2uk2FSqmcv0_6MFHn5GlLtVuQ&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100vh` }} />}
  />, div);
  ReactDOM.unmountComponentAtNode(div)
})