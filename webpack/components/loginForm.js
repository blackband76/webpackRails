import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import { Button } from 'react-bootstrap'

import loginSubmit from './loginSubmit'


const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const handleLogin = ev => {
  ev.preventDefault()
  console.log(ev)
}

const LoginForm = ({ error, handleSubmit, pristine, reset, submitting }) => {
  console.log(handleSubmit)
  return (
    <form action="" method="post" onSubmit={handleSubmit(handleLogin)}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
      />
      <div>
        <Button type="submit" disabled={pristine || submitting}>Sign In</Button>

        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Login Form
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({form: 'loginForm'})(LoginForm)