import axios from 'axios'
import * as util from './util'

export function getDataList (callback) {
  // console.log('login')
  axios.get('/data/list/',
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('key')
      }
    }
  )
    .then(function (response) {
      callback(response.data)
      // console.log(response)
    })
    .catch(function (error) {
      console.log(error.response)
      // callback(error.response)
    })
}

export function uploadData (callback, body, errorCallback) {
  // console.log('login')
  // util.transferToURLSearchParams(body)
  axios.post('/data/list/',
    util.transferToFormData(body),
    {
      headers: {
        'Content-Type': 'application/form-data',
        'Authorization': 'Token ' + localStorage.getItem('key')
      }
    }
  )
    .then(function (response) {
      callback(response.data)
      // console.log(response)
    })
    .catch(function (error) {
      errorCallback(error.response)
      // callback(error.response)
    })
}

export function uploadTag (callback, body) {
  console.log(body)
  // util.transferToURLSearchParams(body)
  axios.post('/data/tag/',
    util.transferToFormData(body),
    {
      headers: {
        'Content-Type': 'application/form-data',
        'Authorization': 'Token ' + localStorage.getItem('key')
      }
    }
  )
    .then(function (response) {
      callback(response.data)
      // console.log(response)
    })
    .catch(function (error) {
      console.log(error.response)
      // callback(error.response)
    })
}

export function pretreatData (callback, body, errorCallback) {
  console.log(body)
  // util.transferToURLSearchParams(body)
  axios.post('/preprocess/',
    body,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('key')
      }
    }
  )
    .then(function (response) {
      callback(response.data)
      // console.log(response)
    })
    .catch(function (response) {
      errorCallback(response.data)
      // callback(error.response)
    })
}
