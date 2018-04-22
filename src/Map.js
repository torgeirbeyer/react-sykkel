import React, { Component } from 'react'
// import GoogleMapReact from 'google-map-react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import BikeList from './BikeList'
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel'
import axios from 'axios'


class BikeMap extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    markers: [],
  }

  componentDidMount() {
    const cors = 'https://cors-anywhere.herokuapp.com/'
    const url = cors + 'https://oslobysykkel.no/api/v1/stations'
    const url2 = cors + 'https://oslobysykkel.no/api/v1/stations/availability'
    const config = {
      'headers': {
        'Client-Identifier': '66949ff070169324775777b287511e7e'
      }
    }
    
    axios.all([
      axios.get(url, config),
      axios.get(url2, config)
    ]).then(axios.spread((stations, available) => {
      stations = stations.data.stations;
      available = available.data.stations;
      const data = stations.reduce((result, station) => {
        const status = available.find(el => station.id === el.id)
        result.push({
          id: station.id,
          name: station.title,
          locks: status.availability.locks,
          bikes: status.availability.bikes,
          center: {
            lat: station.center.latitude,
            lng: station.center.longitude,
          },
          showInfo: false
        })
        return result;
      }, [])
      this.setState({markers: data})
    })).catch(err => {
      console.log(err)
    })
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
    console.log(this.state)
    const markers = this.state.markers || []
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <GoogleMap
          // onZoomChanged={this.zoomChanged.bind(this)}
          defaultZoom={this.props.zoom}
          defaultCenter={this.props.center}>
          {markers.map((marker, index) => (
              <Marker
                key={index}
                position={marker.center}
                onClick={() => this.onMarkerClick(marker)}>
                
                {marker.showInfo && (
                <InfoWindow onCloseClick={() => this.onMarkerClose(marker)}>
                  <div className=''>
                    <h4>Hvor:{marker.name}</h4>
                    <p>Sykler:{marker.bikes} </p>
                    <p>Låser:{marker.locks} </p>
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