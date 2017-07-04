import React from 'react'
import { Field, reduxForm, Form } from 'redux-form'
import { Button } from 'react-bootstrap'

import submit from './loginSubmit'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting, onSubmit } = props

  return (
    <Form onSubmit={handleSubmit(submit)}>
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
      {error && <strong>{error}</strong>}
      <div>
        <Button type="submit" disabled={submitting}>Log In</Button>{' '}
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>{' '}
      </div>
          
    </Form>
  )
}

export default reduxForm({
  form: 'submitValidation', // a unique identifier for this form
})(SubmitValidationForm)
