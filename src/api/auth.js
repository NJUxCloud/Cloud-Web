import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.Authorization = 'Token ' + localStorage.getItem('key')
axios.defaults.headers.token = localStorage.getItem('key')

export function userLogIn (callback, body, errorCallback) {
  console.log(qs.stringify(body))
  // console.log('login')
  axios.post('/rest-auth/login/',
    body,
    {
      headers: {
        'Content-Type': 'application/json'
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

export function userSignin (callback, body, errorCallback) {
  console.log(body)
  // console.log('login')
  axios.post('/rest-auth/registration/',
    body,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .then(function (response) {
      callback(response.data)
      // console.log(response)
    })
    .catch(function (error) {
      errorCallback(error)
    })
}

export function userInfo (callback) {
  // console.log('login')
  console.log('Token ' + localStorage.getItem('key'))
  axios.get('/rest-auth/user/',
    {
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('key'),
        'Authorization': 'Token ' + localStorage.getItem('key')
      }
    }
  )
    .then(function (response) {
      callback(response.data)
      // console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export function changePassword (callback, body, errorCallback) {
  let Base64 = require('js-base64').Base64
  let tok = localStorage.getItem('name') + ':' + body.old_password
  let hash = Base64.encode(tok)
  let auth = 'Basic ' + hash
  // console.log('login')
  // console.log('Token ' + localStorage.getItem('key'))
  axios.post('/rest-auth/password/change/',
    body,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
      }
    }
  )
    .then(function (response) {
      callback(response.data)
      // console.log(response)
    })
    .catch(function (error) {
      errorCallback(error)
    })
}
