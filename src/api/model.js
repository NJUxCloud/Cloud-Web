import axios from 'axios'

export function createModel (callback, body) {
  // console.log('login')
  axios.post('http://127.0.0.1:8000/data/create/',
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
      console.log(error.response)
      // callback(error.response)
    })
}
