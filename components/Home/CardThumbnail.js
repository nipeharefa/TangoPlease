import { Component } from 'react'

export default class CardThumbnail extends Component {

	render() {

		return (
			<div className="card-image">
				<figure className="image is-4by3 apaini">
					<img src="https://unsplash.it/600/400/?random" alt="Image" className="" />
					<div className="containerButtonHover">
						<button className="button is-primary btnMore">Read More</button>
					</div>
				</figure>
			</div>
		)
	}
}