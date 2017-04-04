import stylesheet from 'styles/index.scss'
import Head from 'next/head'
import Card from 'components/Home/Card'

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
						

						<div className="column is-two-thirds is-hidden-touch">

							<div className="columns is-half wrapping">

								<Card />
								<Card />
								<Card />
								<Card />

							</div>
						</div>
						<div className="column is-two-thirds is-hidden-desktop">
							
							<div className="rowCard">
								
								<Card />

							</div>

							<div className="rowCard">
								
								<Card />

							</div>

						</div>

						<div className="column">
							<h1>Sidebar</h1>
							<hr />
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
)