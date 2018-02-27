import axios from 'axios'
import qs from 'qs'

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
      callback(response)
      // console.log(response)
    })
    .catch(function (error) {
      console.log(error)
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
      callback(response)
      // console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}
