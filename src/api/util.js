export function transferToURLSearchParams (body) {
  // console.log('login')
  var params = new URLSearchParams()

  for (let key in body) {
    params.append(key, body[key])
  }
  return params
}

export function transferToFormData (body) {
  // console.log('login')
  var params = new FormData()

  for (let key in body) {
    params.append(key, body[key])
  }
  return params
}
