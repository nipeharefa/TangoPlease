import { Component } from 'react'

export default class CardMediaUser extends Component {

	render() {
		return (
			<div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="https://unsplash.it/48/48/?random" alt="Image"  />
          </figure>
        </div>
        
        <div className="media-content">
          <p className="title is-4">John Smith</p>
          <p className="subtitle is-6">@johnsmith</p>
        </div>
      </div>
		)
	}
}