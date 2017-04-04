import { Component } from 'react'


export default class CardMediaContent extends Component {

	render() {

		return (

      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris...<span className="more-span">more</span>
        <br />
        <small className="timestamp-post">46 Minutes Ago</small>
      </div>
		)
	}
}