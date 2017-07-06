import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import { Button } from 'react-bootstrap'

import loginSubmit from './loginSubmit'
import { required, email } from './validation'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const LoginForm = ({ error, handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit(loginSubmit)}>
      <div>
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email Address"
          validate={[required, email]}
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          validate={ required }
        />
        <Button type="submit" disabled={pristine || submitting}>Sign In</Button>

        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Login Form
        </Button>
    </div>
  </form>
  )
}

export default reduxForm({form: 'loginForm'})(LoginForm)