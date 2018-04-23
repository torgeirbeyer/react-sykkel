import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
// import fetchData from './Fetch.js'
import { expect } from 'chai';
import dotenv from 'dotenv'
dotenv.config()
import { fetchData } from './Fetch.js'
import { get } from './Fetch.js'

const config = {
  'headers': {
    'Client-Identifier': process.env.REACT_APP_DEV_API_KEY
  }
}


// test fungerer ikke per nå. 
describe('Fetch data', () => {
  it('returns data when fetchdata is called', () => {
    const mock = new MockAdapter(axios)
    const data = {response: true}
    mock.onGet('http:localhost:3001')
      .reply(200, data, config)
    })

    fetchData()
      .then(res => {
        expect(res).toEqual(data)
      })
  
})

