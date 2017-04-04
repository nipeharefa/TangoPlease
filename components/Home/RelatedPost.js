import { Component } from 'react'

export default class SideBarRelatedPost extends Component {

	render () {

		return (
			<div className="media">
				<figure className="media-left">
    				<p className="image is-32x32">
      					<img src="https://unsplash.it/48/48/?random" />
    				</p>
  				</figure>

  				<div className="media-content">
  					<div className="content">
  						<p className="sidebar-related-news-title">
  							Bulm bula bulma
  						</p>
  					</div>
  				</div>
			</div>
		)
	}
}