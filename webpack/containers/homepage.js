import React from 'react'


export default class Homepage extends React.Component {

  render() {

	let close = () => this.setState({ show: false})

  	return (
	    <div>
	    	<h2>Hello From Homepage!!</h2>
	    </div>
 		)
  }
}