import { Component } from 'react'

export default class MiniFooter extends Component {


	render() {

		return (

			<div className="side-mini-footer">
				<ul>
					<li>
						<a>Privasi</a>
					</li>

					<li>
						<a>Tentang Kami</a>
					</li>
				</ul>	
				<small>&copy;2017</small>
			</div>
		)
	}
}