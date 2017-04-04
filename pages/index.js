import stylesheet from 'styles/index.scss'
import Head from 'next/head'
import Card from 'components/Home/Card'
import SideBarRelatedPost from 'components/Home/RelatedPost'

export default () => (
	<div>
		<Head>
      		<title>Home</title>
      		<meta charSet='utf-8' />
      		<meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=no' />
    	</Head>
		<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
		<div>

			<section className="section header-section">
				<div>
					<div className="topNav">
						<div className="container">
							<nav className="nav">
								<div className="nav-left">
								    <a className="nav-item">
								      <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
								    </a>
								</div>

								<span className="nav-toggle">
							      <span></span>
							      <span></span>
							      <span></span>
							    </span>

								<div className="nav-right navbar-right-style2 is-hidden-mobile">
									<ul className="nav-right-oke">
										<li>
											<a href="/">Write Story</a>
										</li>
										<li>
											<figure className="image is-32x32">
											  <img src="http://bulma.io/images/placeholders/128x128.png" />
											</figure>
										</li>
									</ul>	
								</div>

							</nav>
						</div>
					</div>

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
				</div>
			</section>
			<section className="section">

				<div className="container">
					<div className="columns">

						<div className="column is-two-thirds">
							
							<div className="columns is-half wrapping">

								<Card />
								<Card />
								<Card />
								<Card />

							</div>

						</div>

						<div className="column sidebar-home">
							<div className="related-container">
								<h1>Sidebar</h1>
								<SideBarRelatedPost />
								<SideBarRelatedPost />
								<SideBarRelatedPost />
								<SideBarRelatedPost />
							</div>
						</div>

					</div>
				</div>
			</section>
		</div>
	</div>
)