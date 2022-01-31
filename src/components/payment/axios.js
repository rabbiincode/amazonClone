import axios from 'axios'

const instance = axios.create({
 // The API (cloud function) URL
  baseURL: 'http://localhost:5001/amazon/central1/api' //Local API End-point
})

export default instance