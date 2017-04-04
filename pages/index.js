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