import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export function fetchData() {
  
    const cors = 'https://cors-anywhere.herokuapp.com/'
    const url = cors + 'https://oslobysykkel.no/api/v1/stations'
    const url2 = cors + 'https://oslobysykkel.no/api/v1/stations/availability'
    const config = {
      'headers': {
        'Client-Identifier': process.env.REACT_APP_DEV_API_KEY
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

export function get() {
  const cors = 'https://cors-anywhere.herokuapp.com/'
  const url = cors + 'https://oslobysykkel.no/api/v1/stations'
  const config = {
    'headers': {
      'Client-Identifier': process.env.REACT_APP_DEV_API_KEY
    }
  }
  
  axios.get(url, config)
    .then(res => console.log(res))
}
