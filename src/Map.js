import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import  {fetchData}  from './helpers/Fetch.js'


class BikeMap extends Component {
  constructor(props) {
    super(props)
    this.fetchData = fetchData.bind(this)
    this.state = {
      markers: [],
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  onMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          marker.showInfo = true          
          console.log(marker)
        }
        return marker
      })
    })
  }

  onMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if(marker === targetMarker) {
          marker.showInfo = false
          console.log(marker)
        }
        return marker
      })
    })
  }

  render() {
    // console.log(this.state)
    const markers = this.state.markers || []
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <GoogleMap
          // onZoomChanged={this.zoomChanged.bind(this)}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}>
          {markers.map((marker, index) => (
              <Marker
                key={marker.id}
                position={marker.center}
                onClick={() => this.onMarkerClick(marker)}>
                
                {marker.showInfo && (
                <InfoWindow onCloseClick={() => this.onMarkerClose(marker)}>
                  <div className=''>
                    <h4>Hvor: {marker.name}</h4>
                    <p>Sykler: {marker.bikes} </p>
                    <p>Låser: {marker.locks} </p>
                  </div>
                  
                </InfoWindow>
              )}
              </Marker>
          ))}       
        </GoogleMap>
      </div>
    )
  }
  
}

export default withScriptjs(withGoogleMap(BikeMap))