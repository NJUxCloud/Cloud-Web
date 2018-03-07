import axios from 'axios'
import * as util from './util'

export function getDataList (callback) {
  // console.log('login')
  axios.get('http://119.23.51.139:8008/data/list/',
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

export function uploadData (callback, body) {
  // console.log('login')
  // util.transferToURLSearchParams(body)
  axios.post('http://119.23.51.139:8008/data/list/',
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

export function uploadTag (callback, body) {
  console.log(body)
  // util.transferToURLSearchParams(body)
  axios.post('http://119.23.51.139:8008/data/tag/',
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
  axios.post('http://119.23.51.139:8008/preprocess/',
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
