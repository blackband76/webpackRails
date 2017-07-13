import React from 'react'
import axios from 'axios'

export default function SignUpSubmit(values) {
	console.log(values)
	axios.post('/api/v1/user/signup',  values)
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