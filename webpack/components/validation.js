import React from 'react'

export const required = value => (value ? undefined : <strong className="bar">Required</strong>)

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? <strong className="bar">Invalid email address</strong>
    : undefined

export const minLength = min => value =>
  value && value.length < min ? <strong className="bar">Must be {min} characters or more</strong> : undefined

export const maxLength = max => value =>
  value && value.length > max ? <strong className="bar">Must be {max} characters or less</strong> : undefined

export const passwordMatch = password => value =>
  value && password != value ? <strong className="bar">password is not matched</strong> : undefined

export const ageValidation = (value) => {
  const birthDate = new Date(value)
  const ageDifMs = Date.now() - birthDate
  const ageDate = new Date(ageDifMs)
  const age = Math.abs(ageDate.getUTCFullYear() - 1970)
  if (age < 12) {
    return <strong className="bar">Sorry, You are under 12 years old</strong>
  }
  else {
    return undefined
  }
}