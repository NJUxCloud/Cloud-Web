import axios from 'axios'
import * as util from './util'

export function createModel (callback, body, errorCallback) {
  console.log(body)
  var params = new URLSearchParams()
  params.append('modelName', body.modelName)

  console.log(params)
  axios.post('http://119.23.51.139:8008/data/create/',
    params,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Token ' + localStorage.getItem('key')
      }
    }
  )
    .then(function (response) {
      callback(response.data)
      // console.log(response)
    })
    .catch(function () {
      errorCallback()
      // callback(error.response)
    })
}

export function constructModel (callback, body, errorCallback, modelInfo) {
  console.log(body)
  let url = 'http://119.23.51.139:8008/construct/construction/' + modelInfo.modelName + '/' + modelInfo.dataType + '/'
  // var params = new URLSearchParams()
  // params.append('modelName', body.modelName)

  console.log(url)
  axios.post(url,
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
    .catch(function (error) {
      errorCallback(error.response)
      // callback(error.response)
    })
}

export function getTrainResult (callback, body) {
  console.log(body)
  let url = 'http://119.23.51.139:8008/runtime/train/' + body.modelName + '/' + body.iter + '/'
    // var params = new URLSearchParams()
  // params.append('modelName', body.modelName)

  // console.log(url)
  axios.get(url,
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

export function getKubernetesResult (callback) {
  // console.log(body)
  let url = 'http://119.23.51.139:8008/runtime/kubernetes/'

  axios.get(url,
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

export function getModelList (callback) {
  // console.log('login')
  axios.get('http://119.23.51.139:8008/construct/config/',
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

export function constructInference (callback, body, modelName, errorCallback) {
  let url = 'http://119.23.51.139:8008/construct/inference/' + modelName + '/'
  console.log(url)
  console.log(body)
  // console.log('login')
  // util.transferToURLSearchParams(body)
  axios.post(url,
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
