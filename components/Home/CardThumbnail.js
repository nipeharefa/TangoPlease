import { Component } from 'react'

export default class CardThumbnail extends Component {

	render() {

		return (
			<div className="card-image">
				<figure className="image is-4by3">
					<img src="https://unsplash.it/600/400/?random" alt="Image" />
				</figure>
			</div>
		)
	}
}