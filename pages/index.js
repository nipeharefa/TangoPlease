import stylesheet from 'styles/index.scss'
import Head from 'next/head'
import Card from 'components/Home/Card'
import SideBarRelatedPost from 'components/Home/RelatedPost'
import { Navbar } from 'components/Global'
import { MiniFooter } from 'components/Global'

export default () => (
	<div>
		<Head>
      		<title>Home</title>
      		<meta charSet='utf-8' />
      		<meta name='viewport' content='initial-scale=1.0, width=device-width, user-scalable=no' />
    	</Head>
		<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
		<div className="anak-body">

			<section className="section header-section">
				<div>
					<Navbar />
				</div>

			</section>

			<section className="section content-section">

				<div className="container">
					<div className="columns">

						<div className="column is-two-thirds">
							
							<div className="columns is-half wrapping">

								<Card />
								<Card />
								<Card />
								<Card />
								<Card />

							</div>

						</div>

						<div className="column sidebar-home">
							<div className="related-container">
								<h1>Berita Terpopular Hari ini</h1>
								<div className="list-related">
									<SideBarRelatedPost />
									<SideBarRelatedPost />
									<SideBarRelatedPost />
									<SideBarRelatedPost />
								</div>
							</div>
							<div>
								<MiniFooter />
							</div>
						</div>

					</div>
				</div>
			</section>
		</div>
	</div>
)