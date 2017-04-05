import { Component } from 'react'
import { TopNav, SecondNav } from './'

export default class Navbar extends Component {

	render() {

		return (
      <div className="nav-box">
        <TopNav />
        <SecondNav /> 
      </div>	
		)
	}
}