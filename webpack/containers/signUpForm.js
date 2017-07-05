import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Col, Row } from 'react-bootstrap'
import { Values } from 'redux-form-website-template'
import { formValueSelector } from 'redux-form'
import { connect } from 'react-redux'

import SignUpSubmit from '../components/signUpSubmit'


const labelStyle = {
  marginTop: "5px"
}

const required = value => (value ? undefined : 'Required')

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? <strong>Invalid email address</strong>
    : undefined

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const passwordMatch = password => value =>
  value && password != value ? 'password is not matched' : undefined

const ageValidation = (value) => {
  const birthDate = new Date(value)
  const ageDifMs = Date.now() - birthDate
  const ageDate = new Date(ageDifMs)
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)
  if (age < 12) {
    return 'Sorry, You are under 12 years old'
  }
  else {
    return undefined
  }
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <Row>
    <Col sm={2}><label style={labelStyle} className="pull-right">{label}</label></Col>
    <Col sm={4}>
      <input className="form-control" {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </Col>
  </Row>
)

const radioGroup = ({ input, label, type, options, meta: { touched, error } }) => (
  <Row>
    <Col sm={2}><label style={{ marginTop: "10px" }} className="pull-right">{label}</label></Col>
    <Col sm={4} style={{ margin: "10px" }}>
      {options.map(o => <label key={o.value}>
        <input 
          type="radio" {...input} 
          value={o.value} 
          checked={o.value === input.value} 
        /> 
        &nbsp;{o.title}&nbsp;&nbsp;&nbsp;</label>)}
      {touched && error && <span className="error">{error}</span>}
    </Col>
  </Row>
)

const maxLength20 = maxLength(20)
const minLength6 = minLength(6)

let SignUpForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  const passwordCheck = passwordMatch( props.password )
  return (
    <div className="container">
      <form onSubmit={handleSubmit(SignUpSubmit)}>
      <Field
          name="displayName"
          type="text"
          component={renderField}
          label="displayName"
          validate={[required, maxLength20]}
        />
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
          label="password"
          validate={[required, minLength6]}
          warn={minLength6}
        />
        <Field
          name="confirmPassword"
          type="password"
          component={renderField}
          label="Comfirm Password"
          validate={[required, passwordCheck]}
        />
        <Row>
        <Field 
          component={radioGroup} 
          name="gender" 
          validate={required} 
          label="Sex"
          options={[
            { title: 'Male', value: 'male' },
            { title: 'Female', value: 'female' }
        ]} />
        </Row>
        <Field
          name="birthDate"
          type="date"
          component={renderField}
          label="Birth Date"
          validate={[required, ageValidation]}
        />
        <Row>
        <Col sm={2}></Col>
        <Col sm={4}>
          <Button type="submit" disabled={pristine || submitting}>Sign Up</Button>
          {' '}
          <Button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Form
          </Button>
        </Col>
        </Row>
      </form>
      <Values form="signUpForm" />
    </div>
    
  )
}



const selector = formValueSelector('signUpForm')

SignUpForm = connect(
  state => ({
    password: selector(state, 'password')
  })
)(SignUpForm)

SignUpForm = reduxForm({
  form: 'signUpForm'  // a unique identifier for this form
})(SignUpForm)

export default SignUpForm
