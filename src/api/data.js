import axios from 'axios'

export function getDataList (callback) {
  // console.log('login')
  axios.get('http://127.0.0.1:8000/data/list/',
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
