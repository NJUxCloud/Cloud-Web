import axios from 'axios'

export function createModel (callback, body) {
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
    .catch(function (error) {
      console.log(error.response)
      // callback(error.response)
    })
}
