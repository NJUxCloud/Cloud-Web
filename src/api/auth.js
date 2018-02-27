import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.Authorization = 'Token ' + localStorage.getItem('key')
axios.defaults.headers.token = localStorage.getItem('key')

export function userLogIn (callback, body) {
  console.log(qs.stringify(body))
  // console.log('login')
  axios.post('http://127.0.0.1:8000/rest-auth/login/',
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
      console.log(error.response)
      // callback(error.response)
    })
}

export function userSignin (callback, body) {
  console.log(body)
  // console.log('login')
  axios.post('http://127.0.0.1:8000/rest-auth/registration/',
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
      console.log(error)
    })
}

export function userInfo (callback) {
  // console.log('login')
  console.log('Token ' + localStorage.getItem('key'))
  axios.get('http://127.0.0.1:8000/rest-auth/user/',
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
  console.log(axios.defaults.headers)
}
