import React from 'react'
import axios from 'axios'

export default function LoginSubmit(values) {
  console.log(values)

	axios.get('/api/v1/user/login', {
    params: values
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })

  return (
    <div />
  )
}