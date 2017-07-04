import React from 'react'
import { Route } from 'react-router-dom'

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Well, FormGroup, FormControl, Button, Modal } from 'react-bootstrap'

import LoginModal from '../components/loginModal'
import SignUpForm from './signUpForm'
import Homepage from './homepage'

export default class Index extends React.Component {

  render() {

	let close = () => this.setState({ show: false})

  	return (
	    <div>

	      <Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="/">React-Bootstrap</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={1} href="/">Link</NavItem>
			        <NavItem eventKey={2} href="#">Link</NavItem>
			        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
			          <MenuItem eventKey={3.1}>Action</MenuItem>
			          <MenuItem eventKey={3.2}>Another action</MenuItem>
			          <MenuItem eventKey={3.3}>Something else here</MenuItem>
			          <MenuItem divider />
			          <MenuItem eventKey={3.3}>Separated link</MenuItem>
			        </NavDropdown>
			      </Nav>

			       <Navbar.Form pullLeft>
			        <FormGroup>
			          <FormControl type="text" placeholder="Search" />
			        </FormGroup>
			        {' '}
			        <Button type="submit">Search</Button>
			      </Navbar.Form>

			      <Nav pullRight>
			        <NavItem> <LoginModal /> </NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
			  <Well className="container">
			  	<Route exact path="/" component={Homepage}/>
	    		<Route exact path="/SignUp" component={SignUpForm}/>
	    	</Well>
	    </div>
 		)
  }
}