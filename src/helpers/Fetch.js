import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export function fetchData() {
  
    axios.get('http://localhost:3001')
      .then(res => this.setState({markers: res.data}))
      .catch(err => console.log(err))
}

