import { Component } from 'react'

export default class SecondNav extends Component {
	
	render() {
		return (
			<div className="secondNav is-hidden-mobile">
				<div className="container">
					<div className="columns">
						<div className="container-navbar">
							<ul className="navbar-category">
								<li>
									<a href="/">Education</a>
								</li>
								<li>
									<a href="/">Politics</a>
								</li>
								<li>
									<a href="/">Social</a>
								</li>
								<li>
									<a href="/">Science</a>
								</li>
								<li>
									<a href="/">Teknologi</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)

	}

}