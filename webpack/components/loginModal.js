import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Values } from 'redux-form-website-template'
import { Field, reduxForm, Form } from 'redux-form'

import LoginForm from './loginForm'
import {ShowResult} from './showResult'
import { Link } from 'react-router-dom'

import loginSubmit from './loginSubmit'

const modalStyle = {
  color: "black"
}

export default class LoginModal extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  render() {

  let close = () => this.setState({ show: false})

    return (
      <div style={modalStyle}>
        <Button onClick={() => this.setState({ show: true})}>
          Sign in or Sign up
        </Button>
        <Modal
          show={this.state.show}
          onHide={close}
          // container={this}
          aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <LoginForm />

          <div className="">
            <Link 
              className="btn btn-primary" 
              to="/SignUp" 
              onClick={() => this.setState({ show: false})}>Sign Up NOW!
            </Link>
          </div>

          <Values form="loginForm" />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}