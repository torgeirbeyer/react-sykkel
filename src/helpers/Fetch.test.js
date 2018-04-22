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

// en kjapp test for å sjekke om axios request er OK.
describe('Fetch data', () => {
  it('returns data when get is called', () => {
    const mock = new MockAdapter(axios)
    const data = {response: true}
    mock.onGet(
      'https://cors-anywhere.herokuapp.com/' + 'https://oslobysykkel.no/api/v1/stations')
      .reply(200, data, config)

      
    })

    let response = get();
 
    setTimeout(() => {
      expect(res).toEqual(data);
    }, 1000)
  
    
})

// test fungerer ikke per nå. 
// describe('Fetch data', () => {
//   it('returns data when fetchdata is called', () => {
//     const mock = new MockAdapter(axios)
//     const data = {response: true}
//     mock.onGet(
//       'https://cors-anywhere.herokuapp.com/' + 'https://oslobysykkel.no/api/v1/stations')
//       .reply(200, data, config)

//       console.log(fetchData)

      
//     })

//     let response = fetchData();
 
//     setTimeout(() => {
//       expect(res).toEqual(data);
//     }, 0)
// })

